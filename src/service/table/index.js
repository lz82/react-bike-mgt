import { AppGet } from '@/utils/request'

export function getBasicTableData() {
  return AppGet('/users')
}
