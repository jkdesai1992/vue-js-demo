import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import About from '../components/About'
import Contact from '../components/Contact'
import AddBusiness from '../components/business/AddBusiness'
import ShowBusiness from '../components/business/ShowBusiness'
import UpdateBusiness from '../components/business/UpdateBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/contact-us', component: Contact },
    { path: '/business', component: AddBusiness },
    { path: '/show-business', component: ShowBusiness },
    { name: 'update-business', path: '/update-business/:id', component: UpdateBusiness }
  ]
})
