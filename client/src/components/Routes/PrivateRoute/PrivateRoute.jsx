import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getUser } from 'store/slices/userSlice';
import Spinner from 'components/Spinner/Spinner';

function PrivateRoute({ roles, ...props }) {
  const { data: user, isFetching } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return <Spinner mtop />;
  }

  if (user && (!roles || roles.includes(user.role))) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
}

export default PrivateRoute;
