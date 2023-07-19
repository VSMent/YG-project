const PossibleStatuses = [
  'InUse',
  'NotInUse',
  'UnderMaintenance',
  'OutOfService',
] as const

type EquipmentStatus = (typeof PossibleStatuses)[number]

type Equipment = {
  id: number
  name: string
  description: string
  status: EquipmentStatus
}

export type { Equipment, EquipmentStatus }
export { PossibleStatuses }
