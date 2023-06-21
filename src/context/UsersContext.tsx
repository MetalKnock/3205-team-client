import { createContext, ReactNode, useState, useMemo, useContext } from 'react';
import { UsersContextType } from 'src/types/context.types';
import { Users } from 'src/types/users.types';

export const UsersContext = createContext<UsersContextType | null>(null);

interface UsersContextProps {
  children: ReactNode;
}

function UsersContextProvider({ children }: UsersContextProps) {
  const [users, setUsers] = useState<Users | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const value = useMemo(
    () => ({
      users,
      isLoading,
      error,
      setUsers,
      setIsLoading,
      setError,
    }),
    [users, isLoading, error]
  );

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}

function useUsersContext() {
  const usersContext = useContext(UsersContext);

  if (!usersContext) throw new Error('You need to use UsersContext within the provider');

  return { ...usersContext };
}

export { UsersContextProvider, useUsersContext };
