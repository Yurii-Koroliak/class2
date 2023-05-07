class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Invalid role specified!');
    }
    this.name = name;
    this.role = role;
    this.loggedIn = false;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  changeName(newName) {
    this.name = newName;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
}



class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [  ];
  }
  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      alert('Invalid user');
    }
  }
  changeUserRole(user, newRole) {
    if (user instanceof User) {
      user.role = newRole;
    } else {
      alert('Invalid user');
    }
  }
  removeAllUsers() {
    this.users = [];
  }
}






const user1 = new User('Petro', 'admin');
console.log(user1.getName());
console.log(user1.getRole());

user1.changeName('Ivan');
console.log(user1.getName());




const admin1 = new Admin('John');
console.log(admin1.getName());
console.log(admin1.getRole());







const user2 = new User('Mary', 'user');

admin1.addUser(user2);
admin1.changeUserRole(user2, 'admin');
console.log(user2.getRole());
