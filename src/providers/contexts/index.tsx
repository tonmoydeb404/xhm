import React, {ReactNode} from 'react';
import AuthProvider from './AuthProvider';
import HomeProvider from './HomeProvider';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const ContextsProvider = (props: Props) => {
  const {children} = props;

  return (
    <AuthProvider>
      <HomeProvider>{children}</HomeProvider>
    </AuthProvider>
  );
};

export default ContextsProvider;
