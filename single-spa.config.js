import { registerApplication, start } from 'single-spa'

// 路由模式
let routerMode = 'history'

// 区分不同模式路由
let pathPrefix = prefix => {
  if (routerMode === 'hash') {
    return location.hash.startsWith(`#${prefix}`)
  }
  return location.pathname.startsWith(prefix)
}

// 注册应用
registerApplication(
  'react',
  () => import('./src/react/index.js'),
  () => pathPrefix('/react')
)

registerApplication(
  'vue',
  () => import('./src/vue/index.js'),
  () => pathPrefix('/vue')
)

// 启动
start()
