export const routes = [{
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
          components: require('Pages/Company/Page'),
        },
        {
          name: 'Company Data',
          path: 'data',
          components: require('Pages/Company/Data'),
        },
      ],
    },
  ],
}]
