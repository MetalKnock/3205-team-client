import { Button } from 'src/components/Button';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import { RoutePath } from 'src/constants/common';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <h2 className='not-found__subtitle'>Looks like you are lost.</h2>
      <p className='not-found__text'>
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link className='not-found__link' to={RoutePath.main}>
        <Button className='not-found__button'>Back to home</Button>
      </Link>
    </div>
  );
}
