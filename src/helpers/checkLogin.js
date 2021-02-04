import jwt_decode from 'jwt-decode';

const confirm = () => {
  const token = localStorage['token'];

  if (token) {
    const decoded = jwt_decode (token);
    const {exp} = decoded;
    if (Date.now () >= exp * 1000) {
      localStorage.removeItem ('token');
      localStorage.removeItem ('userId');
      return false;
    }
    return true;
  }
  return false;
};

export default confirm;
