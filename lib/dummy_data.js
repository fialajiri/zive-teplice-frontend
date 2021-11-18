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

export const getPerformers = () => {
    return  DUMMY_PARTICIPANTS
}