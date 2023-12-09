class AuthenticationService {
  static authenticate(username, password) {
            if (username == "admin" && password == "password"){
              return { isAutheticated: true, token: "sasaxsdlcihsdoichisdjnc" };

            }

  
  }
}

module.exports = AuthenticationService;
