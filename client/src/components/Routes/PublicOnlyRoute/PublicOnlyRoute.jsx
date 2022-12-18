import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { getUser } from 'store/slices/userSlice';
import Spinner from 'components/Spinner/Spinner';

function PublicOnlyRoute(props) {
  const { data: user, isFetching } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return <Spinner mtop />;
  }

  if (!user) {
    return <Route {...props} />;
  }

  history.goBack();
  return null;
}

export default PublicOnlyRoute;
