import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any local session data
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login', { replace: true });
  }, [navigate]);

  return null;
}
