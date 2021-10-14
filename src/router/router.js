import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

import home from '@/pages/home.vue'
import news from '@/pages/news.vue'
import test from '@/pages/test.vue'
import attrsTest from '@/pages/attrsTest.vue'
import clickUrl from '@/pages/clickUrl.vue'
import users from '@/pages/users.vue'
import watchs from '@/pages/watchs.vue'
import computed from '@/pages/computed.vue'
import watchExample from '@/pages/watchExample.vue'

import account from '@/pages/users/account.vue'
import info from '@/pages/users/info.vue'

const routes = [
  { path: '/', component: home },
  { path: '/news/:id/c/:c_cname', component: news },
  { path: '/test/:id', name: 'test', component: test },
  { path: '/attrstest', component: attrsTest },
  { path: '/clickurl', component: clickUrl },
  {
    path: '/users',
    component: users,
    children: [
      { path: 'info', component: info },
      { path: 'account', component: account },
    ],
  },
  { path: '/watchs', component: watchs },
  { path: '/computed', component: computed },
  { path: '/watchExample', component: watchExample },
]
const router = new VueRouter({
  mode: 'history',
  routes,
  // 控制滚动行为 保持滚动状态
  scrollBehavior(to, from, savedPosition) {
    // const isLiveListToRoom = from.name == 'livelist' && to.name == 'liveroom'
    // const isLiveRoomToList = to.name == 'livelist' && from.name == 'liveroom'
    // if (savedPosition || isLiveListToRoom || isLiveRoomToList) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
export default router
