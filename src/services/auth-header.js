export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.tokenString) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return  'Bearer '+ user.tokenString ;       // for Node.js Express back-end
  } 
}
