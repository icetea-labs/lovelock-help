const ogprefix = 'og: http://ogp.me/ns#'
const title = 'LoveLock Help'
const description = 'LoveLock Help and Support Center'

module.exports = {
    title: 'LoveLock Help',
    description: 'LoveLock Help and Support Center',
    ga: 'UA-8597504-7',
    head: [
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://help.lovelock.one/img/share.png' }],
        ['link', { rel: 'icon', href: 'https://lovelock.one/favicon.ico' }]
    ],
    themeConfig: {
        logo: 'https://lovelock.one/apple-touch-icon.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FAQ', link: '/faq/' },
            { text: 'Tips', link: '/tips/' },
            { text: 'LoveLock', link: 'https://lovelock.one' },
        ],
        sidebar: 'auto'
    }
}