import {GoogleOAuthWebClientId} from '@/config/auth.config';
import AuthContext, {initialState} from '@/contexts/AuthContext';
import {supabase} from '@/lib/supabase';
import {Auth} from '@/types/auth.type';
import {Profile} from '@/types/profile.type';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Session} from '@supabase/supabase-js';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

// ----------------------------------------------------------------------

GoogleSignin.configure({
  webClientId: GoogleOAuthWebClientId,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  // common state
  const {children} = props;

  // app state
  const [user, setUser] = useState<Auth['user']>(initialState.user);
  const [profile, setProfile] = useState<Auth['profile']>(initialState.profile);
  const [isAuthenticated, setIsAuthenticated] = useState<
    Auth['isAuthenticated']
  >(initialState.isAuthenticated);
  const [isLoading, setIsLoading] = useState<Auth['isLoading']>(
    initialState.isLoading,
  );

  // reset auth state
  const resetAuthState = () => {
    setUser(null);
    setProfile(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  // handle signin with google
  const signInWithGoogle = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.idToken) {
        const {data, error} = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.idToken,
        });
        // console.log(error, data);
      } else {
        throw new Error('no ID token present!');
      }
    } catch (error: any) {
      console.log(error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, []);

  // handle signout
  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    resetAuthState();
  }, []);

  // listen to supabase changes
  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      if (!session) return resetAuthState();

      setUser(session.user);
      const profile = getProfileFromSession(session);
      setProfile(profile);
      setIsLoading(false);
      setIsAuthenticated(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) return resetAuthState();

      setUser(session.user);
      const profile = getProfileFromSession(session);
      setProfile(profile);
      setIsLoading(false);
      setIsAuthenticated(true);
    });
  }, []);

  // memorized value c
  const value: Auth = useMemo(
    () => ({
      user,
      profile,
      isAuthenticated,
      isLoading,

      // actions
      signOut,
      signInWithGoogle,
    }),
    [user, profile, isAuthenticated, isLoading, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// ----------------------------------------------------------------------

const getProfileFromSession = (session: Session): Profile | null => {
  if (!session.user.email) return null;

  return {
    fullName: session.user.user_metadata?.full_name,
    avatar: session.user.user_metadata?.avatar_url,
    email: session.user.email,
    id: session.user.id,
  };
};
