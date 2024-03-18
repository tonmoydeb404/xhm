import {User} from '@supabase/supabase-js';
import {Profile} from './profile.type';

export interface Auth {
  user: User | null;
  profile: Profile | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // actions
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}
