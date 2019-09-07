export const routes = [
  {
    name: 'Home',
    path: '/',
    children: [
      {
        path: 'company',
        components: require('Pages/Company'),
        children: [
          {
            name: 'Company Page',
            path: '',
            // path: '/company/data',
            components: require('Pages/Company/Page'),
          },
          {
            name: 'Company Data',
            path: 'data',
            // path: '/company/data',
            components: require('Pages/Company/Data'),
          },
        ],
      },
    ],
  },
]
