import { v4 as uuidv4 } from 'uuid';
import { Users } from 'src/types/users.types';
import { UserItem } from './UserItem';
import './UserList.scss';

interface UserListProps {
  users: Users;
}

export default function UserList({ users }: UserListProps) {
  if (users.length === 0) {
    return <div className='user-list__text'>No users found for your request</div>;
  }

  return (
    <ul className='user-list'>
      {users.map((user) => (
        <UserItem key={uuidv4()} user={user} />
      ))}
    </ul>
  );
}
