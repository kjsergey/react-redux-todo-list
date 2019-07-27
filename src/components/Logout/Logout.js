import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { unauthenticated } from '../../actions/actionCreators'
import history from '../../history';

const Logout= () => {
  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(unauthenticated());
      localStorage.removeItem('jwt');
      history.push('/');
    }
  );

  return null;
}

export default Logout;
