type Role = 'admin' | 'user'

class User {
  login: string
  pass: string
  role: Role

  constructor(_login: string, _pass: string, _role: Role = 'user') {
    this.login = _login
    this.pass = _pass
    this.role = _role
  }
}

export default User
