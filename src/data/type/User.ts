const PossibleRoles = ['admin', 'user', 'employee'] as const
const PossibleDepartments = ['personnel', 'marketing'] as const

type Role = (typeof PossibleRoles)[number]
type Department = (typeof PossibleDepartments)[number]

type User = {
  firstname: string
  lastname: string
  email: string
  pass: string
} & (
  | { role: Exclude<Role, 'employee'> }
  | {
      role: Extract<Role, 'employee'>
      department: Department
    }
)

export type { User, Role, Department }
export { PossibleRoles, PossibleDepartments }
