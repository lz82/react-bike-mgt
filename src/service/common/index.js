import { AppGet } from '@/utils/request'

export function getMenu() {
  return AppGet('/menus')
}

export function getHeader() {
  return AppGet('/header')
}
