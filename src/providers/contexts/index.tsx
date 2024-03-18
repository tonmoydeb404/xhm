import React, {ReactNode} from 'react';
import AuthProvider from './AuthProvider';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const ContextsProvider = (props: Props) => {
  const {children} = props;

  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextsProvider;
