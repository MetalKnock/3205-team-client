import { Dispatch, SetStateAction } from 'react';
import { Users } from './users.types';

interface UsersContextType {
  users: Users | null;
  isLoading: boolean;
  error: string;
  setUsers: Dispatch<SetStateAction<Users | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
}

export type { UsersContextType };
