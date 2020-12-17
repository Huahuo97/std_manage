import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/Login'
import Register from 'pages/register/Register'
import System from 'pages/system/System'
import StudentInfo from 'pages/system/component/StudentInfo'
import ModifyInfo from 'pages/system/component/ModifyInfo'
import Grade from 'pages/system/component/Grade'
import Schedule from 'pages/system/component/Schedule'
import CourseSelect from 'pages/system/component/CourseSelect'
import ClassApply from 'pages/system/component/ClassApply'
import Setting from 'pages/system/component/Setting'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/system',
      name: 'System',
      component: System,
      children: [
        {
          path: 'info',
          name: 'StudentInfo',
          component: StudentInfo
        },
        {
          path: 'modify-info',
          name: 'ModifyInfo',
          component: ModifyInfo
        },
        {
          path: 'grade',
          name: 'Grade',
          component: Grade
        },
        {
          path: 'schedule',
          name: 'Schedule',
          component: Schedule
        },
        {
          path: 'course-select',
          name: 'CourseSelect',
          component: CourseSelect
        },
        {
          path: 'class-apply',
          name: 'ClassApply',
          component: ClassApply
        },
        {
          path: 'setting',
          name: 'Setting',
          component: Setting
        }
      ]
    }
  ]
})
