import { User } from 'src/types/users.types';
import avatar from 'src/assets/avatar.svg';
import './UserItem.scss';

interface UserItemProps {
  user: User;
}

export default function UserItem({ user }: UserItemProps) {
  const { email, number } = user;

  return (
    <li className='user-item'>
      <img className='user-item__image' src={avatar} alt='' />
      <p className='user-item__text'>{email}</p>
      <p className='user-item__text'>{number}</p>
    </li>
  );
}
