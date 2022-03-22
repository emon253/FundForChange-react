import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  login(userName,email, password) {
    console.log(userName)
    return axios
      .post(API_URL + "login", {
        userName,
        email,
        password,
      })
      .then(response => {
        console.log(response)
        if (response.data.tokenString) {
          localStorage.setItem("user",JSON.stringify(response.data) );
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
