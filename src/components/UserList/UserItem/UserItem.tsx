import { User } from 'src/types/users.types';

interface UserItemProps {
  user: User;
}

export default function UserItem({ user }: UserItemProps) {
  const { email, number } = user;

  return (
    <div>
      <div>{email}</div>
      <div>{number}</div>
    </div>
  );
}
