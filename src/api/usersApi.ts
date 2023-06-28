import { API_URL, ApiPath } from 'src/constants/common';
import { Users } from 'src/types/users.types';

interface SearchUsersProps {
  email: string;
  number?: string;
  signal: AbortSignal;
}

const searchUsers = async ({ email, number, signal }: SearchUsersProps) => {
  const requestBody = number ? { email, number } : { email };

  const response = await fetch(`${API_URL}${ApiPath.users}`, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error('Failed to get users');
  }

  const data: Users = await response.json();
  return data;
};

export { searchUsers };
