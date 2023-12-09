class AuthenticationService {
  static authenticate(username, password) {
      // Log the received username and password
      console.log(`Received - Username: ${username}, Password: ${password}`);

      // Define the expected username and password
      const expectedUsername = "admin";
      const expectedPassword = "password";

      // Check if the provided credentials match the expected ones
      if (username === expectedUsername && password === expectedPassword) {
          console.log('-----AUTHENTICATED');
          return true;
      } else {
          console.log('NOT AUTHENTICATED');
          return false;
      }
  }
}


module.exports = AuthenticationService;