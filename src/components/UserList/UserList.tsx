import { v4 as uuidv4 } from 'uuid';
import { Users } from 'src/types/users.types';
import { UserItem } from './UserItem';

interface UserListProps {
  users: Users;
}

export default function UserList({ users }: UserListProps) {
  if (users.length === 0) {
    return <div>No users found for your request</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={uuidv4()} user={user} />
      ))}
    </ul>
  );
}
