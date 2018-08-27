import pathToRegexp from 'path-to-regexp'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

const routes = [
    { path: '/', name: 'home', page: Home },
    { path: '/about', name: 'about', page: About },
    { path: '/contact', name: 'contact', page: Contact },
    { loggedIn: true, path: '/profile', name: 'profile', page: Profile },
]

const notFoundRoute = { name: 'notFound', page: NotFound }

routes.forEach(route => route.re = pathToRegexp(route.path))

export const match = (path) => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        const params = route.re.exec(path)
        if (params) {
            return { route, params }
        }
    }

    return {
        route: notFoundRoute,
        params: {},
    }
}