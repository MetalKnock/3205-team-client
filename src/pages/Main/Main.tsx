import { MainContent } from 'src/components/MainContent';
import { UsersContextProvider } from 'src/context/UsersContext';

export default function Main() {
  return (
    <UsersContextProvider>
      <MainContent />
    </UsersContextProvider>
  );
}
