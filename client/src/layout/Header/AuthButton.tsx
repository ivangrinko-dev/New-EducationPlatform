import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import { AuthContext } from '@context/AuthContext';
import style from './style.module.scss';

const AuthButton: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (isAuthenticated) {
    return (
      <div>
        <Button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className={style.sign}
          variant="outlined"
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className={style.btns}>
      <Link to="/auth">
        <Button className={style.login} variant="text">
          Login <ChevronRight />
        </Button>
      </Link>

      <Link to="/reg">
        <Button className={style.sign} variant="outlined">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;
