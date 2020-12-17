import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../pages/404/NotFound'
import Home from '../pages/home/Home'
import About from '../pages/about/About'

import Blog from '../pages/blog/Blog'
import Post from '../pages/blog/Post'
import BlogEntries from '../components/blog/data.json'

import Contact from '../pages/contact/Contact'
import Resume from '../pages/resume/Resume'
import Project from '../pages/project/Project'
import Award from '../pages/award/Award'
import Talk from '../pages/talk/Talk'
import Changelog from '../pages/changelog/Changelog'

Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(post => ({
    path: post.slug,
    name: post.slug,
    component: () => import(`../components/blog/markdown/${section}/${post.slug}.md`),
    meta: {
      title: `${post.title}`,
      description: `${post.description}`,
      date: `${post.date}, ${section}`,
    }
  }))
  return {
    path: `/blog`,
    name: section,
    component: Post,
    children
  }
})

const routes = [
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/award',
    name: 'award',
    component: Award
  },
  {
    path: '/talk',
    name: 'talk',
    component: Talk
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: Changelog
  },
  ...blogRoutes
]

export default new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    } else {
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
