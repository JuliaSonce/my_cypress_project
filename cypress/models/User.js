import {randomEmail} from "../e2e/random_email_generator";
export class User {
  constructor(name, lastName,email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  static validUnregisteredUser() {
    let result = new User("July", "Nachbarn", randomEmail(), "3InMrL5cJLf5P7Q")
    return result;
  }

  static validRegisteredUser() {
    let result = new User("Test", "Testowich", "TestTestowichyou@gmail.com", "TestTest123!");
    return result;
  }
        
}