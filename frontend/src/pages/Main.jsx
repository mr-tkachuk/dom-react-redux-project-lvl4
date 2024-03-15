import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { authDataSelector } from '../entities/User/selectors';
import Chat from '../widgets/Chat/Chat';

export default function Main() {
  const authData = useSelector(authDataSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authData) {
      navigate('/login');
    }
  }, [authData]);
  return authData && (<Chat />);
}
