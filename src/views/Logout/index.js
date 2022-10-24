import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { removeToken } from '~/boot/auth';

function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
    navigate('/');
  }, [navigate, removeToken]);

  return null
}

export default LogOut;
