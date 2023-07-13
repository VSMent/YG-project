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

export type { User, Role, Department }
