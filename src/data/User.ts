class User {
  login: string
  pass: string

  constructor (_login: string, _pass: string) {
    this.login = _login
    this.pass = _pass
  }

}

export default User