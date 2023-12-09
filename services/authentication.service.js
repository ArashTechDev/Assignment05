class AuthenticationService {
  static authenticate(username, password) {
            if (username == "admin" && password == "password"){
              return { isAuthenticated: true, token: "sasaxsdlcihsdoichisdjnc" };

            }
            else{
              return {isAuthenticated: false};
            }

  
  }
}

module.exports = AuthenticationService;
