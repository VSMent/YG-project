type Role = 'admin' | 'user' | 'employee'
type Department = 'personnel' | 'marketing'

type User = {
  firstname: string
  lastname: string
  login: string
  pass: string
} & (
  | { role: Exclude<Role, 'employee'> }
  | {
      role: Extract<Role, 'employee'>
      department: Department
    }
)

// class User {
//   firstname: string
//   lastname: string
//   login: string
//   pass: string
//   role: Role
//   department: Department
//
//   constructor(
//     _login: string,
//     _pass: string,
//     _firstname: string = '',
//     _lastname: string = '',
//     _role: Role = 'user'
//   ) {
//     this.login = _login
//     this.pass = _pass
//     this.firstname = _firstname
//     this.lastname = _lastname
//     this.role = _role
//   }
// }

export type { User, Role, Department }
