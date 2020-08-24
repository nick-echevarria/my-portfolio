import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0973e1fa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1fc62de0 = () => interopDefault(import('../pages/code.vue' /* webpackChunkName: "pages/code" */))
const _7e801fcd = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6b462974 = () => interopDefault(import('../pages/copywriting.vue' /* webpackChunkName: "pages/copywriting" */))
const _292bbcbf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0973e1fa,
    name: "about"
  }, {
    path: "/code",
    component: _1fc62de0,
    name: "code"
  }, {
    path: "/contact",
    component: _7e801fcd,
    name: "contact"
  }, {
    path: "/copywriting",
    component: _6b462974,
    name: "copywriting"
  }, {
    path: "/",
    component: _292bbcbf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
