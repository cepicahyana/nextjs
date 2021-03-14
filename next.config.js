module.exports = {
    env: {
        appName: 'Hutri76',
    },

    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login',
            },
            {
                source: '/register',
                destination: '/auth/register',
            },
        ]
    }
}