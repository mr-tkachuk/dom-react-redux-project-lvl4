import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../widgets/Header';
import { userActions } from '../entities/User/userSlice';
import { isMountedSelector } from '../entities/User/selectors';

export default function Root() {
  const dispatch = useDispatch();
  const isMounted = useSelector(isMountedSelector);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (

    isMounted
        && (
        <div className="vh-100">
          <Header />
          <Container className="h-100">
            <Outlet />
          </Container>
        </div>
        )

  );
}
