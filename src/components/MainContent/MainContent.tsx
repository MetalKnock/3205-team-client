import spinner from 'src/assets/spinner.svg';
import { useUsersContext } from 'src/context/UsersContext';
import { UserList } from '../UserList';
import { UserForm } from '../UserForm';
import './MainContent.scss';

export default function MainContent() {
  const { isLoading, users, error } = useUsersContext();

  return (
    <div className='main-content'>
      <UserForm className='main-content__form' />
      {!isLoading && !error && users && <UserList users={users} />}
      {isLoading && <img className='main-content__spinner' src={spinner} alt='spinner' />}
      {error && <div className='main-content__error'>{error}</div>}
    </div>
  );
}
