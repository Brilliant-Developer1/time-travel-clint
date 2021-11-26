const watches = [
    {
        id:'V213GUCLMC',
        name:'OBAKU',
        price:'16,800',
        gender:'Male',
        inStock:'Available',
        dialColor : 'BLUE',
        braceletColor:'SILVER',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    },
    {
        id:'V196GUBBMB ',
        name:'OBAKU',
        price:'18,450',
        gender:'Male',
        inStock:'Available',
        dialColor : 'BLACK',
        braceletColor:'BLACK',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1616928231359-fc8b7e244c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    },
    {
        id:'V205GUCLSC',
        name:'OBAKU',
        price:'19,500',
        gender:'Male',
        inStock:'Sold Out',
        dialColor : 'BLUE',
        braceletColor:'STEEL',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1621062308045-bfb0adc11955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        id:'V196GUVLRN',
        name:'OBAKU',
        price:'17,350',
        gender:'Male',
        inStock:'Available',
        dialColor : 'BLUE',
        braceletColor:'BROWN',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
        id:'V183LXCLSA',
        name:'OBAKU',
        price:'17,870',
        gender:'FEMALE',
        inStock:'Available',
        dialColor : 'BLUE',
        braceletColor:'BLUE & SILVER',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1618337978865-f02783a02355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    },
    {
        id:'V173LXGWMC2',
        name:'OBAKU',
        price:'17,870',
        gender:'FEMALE',
        inStock:'Available',
        dialColor : 'WHITE',
        braceletColor:'SILVER',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
    },
    {
        id:'V219LXVAMV',
        name:'OBAKU',
        price:'17,560',
        gender:'FEMALE',
        inStock:'Available',
        dialColor : 'GOLD',
        braceletColor:'ROSE GOLD',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1584091287122-ce4bb8a62207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        id:'2639SL01',
        name:'TITAN',
        price:'12,560',
        gender:'FEMALE',
        inStock:'Available',
        dialColor : 'BLACK',
        braceletColor:'BLACK',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1099&q=80'
    },
    {
        id:'2481SL08',
        name:'TITAN',
        price:'14,960',
        gender:'FEMALE',
        inStock:'Sold Out',
        dialColor : 'BLUE',
        braceletColor:'BLACK',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80'
    },
    {
        id:'2598SL02',
        name:'TITAN',
        price:'16,920',
        gender:'FEMALE',
        inStock:'Available',
        dialColor : 'White',
        braceletColor:'BLACK',
        details:'Quartz movement for constant and accurate timing. Not only is this one of the most precise watches you’ll ever own, it’s ultra quiet and super low maintenance.',
        img:'https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    },
]

const reviews = [
    {
        name:'Ali Hossain',
        review:'I ordered a Hugo boss watch and it arrived with in a couple of days. The watch is beautiful and after reading something on Facebook about the watches being fake. I compared it to my other Hugo boss watch that I bought from a jewelers and I can honestly say its bang on and genuine. I will definitely be buying from the watch shop again soon and would highly recommend them. Because the prices are very competitive'
    },
    {
        name:'Nahiyan Kafi',
        review:'Excellent and courteous service. First item shipped was lost in the mail but replaced as soon as I notified Watch Shop of the problem or a full refund offered. Second item arrived fine and was very well packaged as a fragile item. Really good first impression on service and price so would recommend to others without hesitation. I will be using them again.'
    }
]

