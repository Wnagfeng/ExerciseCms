import type { RouteRecordRaw } from 'vue-router'
import type { Usermenu } from '@/types/userMenu.js'
export interface fristRouterUrlType {
  id: number;
  url: string;
  name: string;
  sort: number;
  type: number;
  children?: any;
  parentId: number;
}
export function loadLocalRouters() {
  const localRouters: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob(
    '../router/Main/**/*.ts',
    { eager: true }
  )
  for (const key in files) {
    const module = files[key]
    console.log(module)
    localRouters.push(module.default)
  }
  return localRouters
}


export let fristRouterUrl: fristRouterUrlType = null
export function mapMenusToRouters(usermenu: Usermenu[]) {
  const localRouters = loadLocalRouters()
  const rouers: RouteRecordRaw[] = []

  for (const menu of usermenu) {
    for (const submenu of menu.children) {
      const route = localRouters.find((item) => item.path === submenu.url)
      if (route) {
        if (!rouers.find((item) => item.path === menu.url)) {
          rouers.push({ path: menu.url, redirect: route.path })
        }
        rouers.push(route)
      }
      console.log(fristRouterUrl)
      if (fristRouterUrl === null && route) {
        fristRouterUrl = submenu
      }
    }
  }
  return rouers
}

export function mapPathtoUsermenus(path: any, usermenu: any) {
  for (const menu of usermenu) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu.id
      }
    }
  }
}

interface IBreadcrumb {
  name: any
  path: any
}
// 封装一个函数用户匹配面包屑
// 需求根据当前路由去匹配父级路由的name同时也要展示当前路由的name
export function mapPathToBreadcrumbName(path: any, usermenu: any) {
  // 用户传递过来当个路由和全部路由
  const Breadcrumb: IBreadcrumb[] = []
  for (const menu of usermenu) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        Breadcrumb.push({ name: menu.name, path: menu.url })
        Breadcrumb.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return Breadcrumb
}

// 根据用户的权限列表获取用户的权限
export function mapUsermenutoPermissions(usermenu: any[]) {
  // 创建一个用于保存用户权限的数组
  let Permissions: any = []
  // 写一个闭包来解析该用户的权限
  function mapPermissions(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        mapPermissions(item.children)
      } else {
        if (item.permission) {
          Permissions.push(item.permission)
        }
      }
    }
  }
  mapPermissions(usermenu)
  return Permissions
}
