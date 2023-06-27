type Role = 'admin' | 'user'

class User {
  firstname: string
  lastname: string
  login: string
  pass: string
  role: Role

  constructor(
    _login: string,
    _pass: string,
    _firstname: string = '',
    _lastname: string = '',
    _role: Role = 'user'
  ) {
    this.login = _login
    this.pass = _pass
    this.firstname = _firstname
    this.lastname = _lastname
    this.role = _role
  }
}

export default User
