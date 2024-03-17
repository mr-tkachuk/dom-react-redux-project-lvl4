import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../widgets/Header/Header';
import { userActions } from '../entities/User/userSlice';
import { isMountedSelector } from '../entities/User/selectors';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const dispatch = useDispatch();
  const isMounted = useSelector(isMountedSelector);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  return (

    isMounted
        && (
        <div className="d-flex flex-column h-100">
          <Header />
          <ToastContainer />
          <Outlet />
        </div>
        )

  );
};
export default Root;
