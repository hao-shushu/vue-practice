module.exports = {
    routes: [{
            path: '/about',
            component: require('./views/about.vue')
        },
        {
            path: '/login',
            component: require('./views/login.vue')
        },
        {
            path: '/my-test',
            component: require('./views/my-test.vue')
        }
    ]
}