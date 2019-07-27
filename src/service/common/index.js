import { AppGet } from '@/utils/request'

export function getMenu() {
  return AppGet('/mock-data/menu.json')
}
