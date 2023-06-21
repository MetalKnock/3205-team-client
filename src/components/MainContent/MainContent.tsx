import spinner from 'src/assets/spinner.svg';
import { useUsersContext } from 'src/context/UsersContext';
import { UserList } from '../UserList';
import { UserForm } from '../UserForm';

export default function MainContent() {
  const { isLoading, users, error } = useUsersContext();

  return (
    <>
      <UserForm />
      {!isLoading && !error && users && <UserList users={users} />}
      {isLoading && <img src={spinner} alt='spinner' />}
      {error && <div>{error}</div>}
    </>
  );
}
