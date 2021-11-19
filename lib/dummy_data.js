const DUMMY_PARTICIPANTS = [
    {
        id: 'p1',
        email: "ella@gmail.com",
        name: "Ella Ovoce a Zelenina",
        keywords: 'ovoce, zelenina, čerství, dobrý',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'prodejce',
        tel: '602107243',
        image: '/img/2021/img-3.jpg',
        active: 'true',
        registeredToCurrent: 'true'

    },
    {
        id: 'p2',
        email: "jan.zizka@gmail.com",
        name: "Jan Žižka",
        keywords: 'obrazy, umění, art, olej na plátně',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Vivamus nec arcu.',
        type: 'prodejce',
        tel: '602107243',
        image: '/img/2021/img-9.jpg',
        active: 'true',
        registeredToCurrent: 'true'

    },
    {
        id: 'p3',
        email: "fish@ryba@gmail.com",
        name: "Panopticum Maxe Fische",
        keywords: 'divadlo, pro děti, legrační',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'učinkující',
        tel: '602107243',
        image: '/img/2021/img-4.jpg',
        active: 'true',
        registeredToCurrent: 'true'

    },
    {
        id: 'p4',
        email: "carroth.man@gmail.com",
        name: "Mrkvoman",
        keywords: 'Mrkvoman, pro děti, legrační',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'učinkující',
        tel: '602107243',
        image: '/img/2020/img-5.jpg',
        active: 'false',
        registeredToCurrent: 'false'

    },
    {
        id: 'p5',
        email: "marcela@gmail.com",
        name: "Marcela Magdíková",
        keywords: 'umění, art, korálky',
        description: 'Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'prodejce',
        tel: '602107243',
        image: '/img/2019/img-5.jpg',
        active: 'true',
        registeredToCurrent: 'false'

    },
    {
        id: 'p6',
        email: "cafe@schonau.com",
        name: "Café Schonau",
        keywords: 'káva, drinky, nealko',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien. Vivamus nec arcu odio.',
        type: 'prodejce',
        tel: '602107243',
        image: '/img/2019/img-4.jpg',
        active: 'true',
        registeredToCurrent: 'false'

    },
    {
        id: 'p7',
        email: "kyticka@gmail.com",
        name: "Kytička",
        keywords: 'hudba, zpěv, písně',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'učinkující',
        tel: '602107243',
        image: '/img/2018/img-2.jpg',
        active: 'false',
        registeredToCurrent: 'false'

    },
    {
        id: 'p8',
        email: "edafon@gmail.com",
        name: "Edafon",
        keywords: 'hudba, zpěv, písně',
        description: 'Vivamus nec arcu odio. In tempus tortor eget nulla feugiat luctus. Maecenas diam sem, ornare elementum dapibus vel, pulvinar nec turpis. Nunc ac nibh faucibus, tincidunt nibh et, pretium nulla. Nam fringilla nec urna id accumsan. Proin laoreet, turpis ac placerat cursus, ex lorem eleifend mi, a tincidunt ex odio at sapien.',
        type: 'učinkující',
        tel: '602107243',
        image: '/img/2017/img-1.jpg',
        active: 'true',
        registeredToCurrent: 'false'

    },
]


const DUMMY_NEWS = [
    {
        id: 'n1',
        date: 'Fri Nov 19 2021 12:52:29 GMT+0100',
        title: 'Tento rok Živé Teplice opět budou',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis lectus tortor, vitae consequat erat elementum vel.',
        message: 'Fusce eu dignissim justo. Quisque sed massa ut massa faucibus faucibus. Proin laoreet accumsan risus hendrerit tempor. Etiam sit amet fringilla diam, ac fringilla leo. Ut ultricies nisi maximus dictum eleifend. Maecenas mollis lorem quis nulla porta, in rhoncus neque ornare. Aliquam dignissim ante vitae tempor tincidunt. Curabitur ipsum mi, viverra non tellus eu, ullamcorper convallis metus. Pellentesque quis ultrices metus.',        
    },
    {
        id: 'n2',
        date: 'Mon Nov 1 2021 15:12:29 GMT+0100',
        title: 'Živé Teplice se blíží',
        abstract: 'Curabitur at rutrum lorem. Donec varius elementum dui a facilisis. Nam laoreet eu nulla quis pharetra. Suspendisse luctus est sit amet ligula efficitur pulvinar ac nec elit.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n3',
        date: 'Mon Oct 4 2021 15:12:29 GMT+0100',
        title: 'Přihlášky na další ročník otevřeny!',
        abstract: 'Fusce eu dignissim justo. Quisque sed massa ut massa faucibus faucibus.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n4',
        date: 'Mon Oct 18 2021 15:12:29 GMT+0100',
        title: 'Již zbývá jen týden to konce přihlašování!',
        abstract: 'Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. ',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n5',
        date: 'Mon Oct 25 2021 15:12:29 GMT+0100',
        title: 'Živé Teplice již zítra!',
        abstract: 'Sed ornare nisi metus, sed tempus nunc malesuada sit amet.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n6',
        date: 'Fri Nov 19 2021 12:52:29 GMT+0100',
        title: 'Tento rok Živé Teplice opět budou',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis lectus tortor, vitae consequat erat elementum vel.',
        message: 'Fusce eu dignissim justo. Quisque sed massa ut massa faucibus faucibus. Proin laoreet accumsan risus hendrerit tempor. Etiam sit amet fringilla diam, ac fringilla leo. Ut ultricies nisi maximus dictum eleifend. Maecenas mollis lorem quis nulla porta, in rhoncus neque ornare. Aliquam dignissim ante vitae tempor tincidunt. Curabitur ipsum mi, viverra non tellus eu, ullamcorper convallis metus. Pellentesque quis ultrices metus.',        
    },
    {
        id: 'n7',
        date: 'Mon Aug 16 2021 15:12:29 GMT+0100',
        title: 'Živé Teplice se blíží',
        abstract: 'Curabitur at rutrum lorem. Donec varius elementum dui a facilisis. Nam laoreet eu nulla quis pharetra. Suspendisse luctus est sit amet ligula efficitur pulvinar ac nec elit.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n8',
        date: 'Mon Aug 30 2021 15:12:29 GMT+0100',
        title: 'Přihlášky na další ročník otevřeny!',
        abstract: 'Fusce eu dignissim justo. Quisque sed massa ut massa faucibus faucibus.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n9',
        date: 'Mon Aug 9 2021 15:12:29 GMT+0100',
        title: 'Již zbývá jen týden to konce přihlašování!',
        abstract: 'Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. ',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    },
    {
        id: 'n10',
        date: 'Mon Aug 2 2021 15:12:29 GMT+0100',
        title: 'Živé Teplice již zítra!',
        abstract: 'Sed ornare nisi metus, sed tempus nunc malesuada sit amet.',
        message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis ante ac magna pulvinar scelerisque nec eu ligula. Sed iaculis eros ut nunc ornare, non sagittis enim vulputate. Integer a dolor ullamcorper, rhoncus nunc vitae, pulvinar ante. Duis pretium, justo a pulvinar blandit, massa nisi vulputate ex, et facilisis tellus neque a lacus. Aliquam nunc ipsum, sollicitudin sed scelerisque quis, semper mattis sem. Curabitur elit justo, eleifend nec maximus nec, lacinia id urna. Nullam in risus tellus. Praesent rutrum turpis sed dolor pellentesque rhoncus eget non nisl. Cras leo est, scelerisque quis pulvinar quis, volutpat quis ex. Phasellus mattis at ligula eget suscipit. Donec semper ultricies mauris sed rhoncus. Nunc finibus tellus justo, vel dictum ligula mollis id. Integer fermentum, arcu sit amet ultrices imperdiet, ipsum nulla mollis tellus, sit amet porttitor leo diam id elit. Proin placerat dui diam, vitae ultrices ex dictum finibus. Proin malesuada nisi purus, in condimentum dolor consequat in.',

    }
]

export const getPerformers = () => {
    return  DUMMY_PARTICIPANTS
}

export const getNews = () => {
    return DUMMY_NEWS;
}