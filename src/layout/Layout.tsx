import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
  return (
    <>
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}
