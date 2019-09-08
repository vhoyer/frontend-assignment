import Company from 'Pages/Company';
import CompanyPage from 'Pages/Company/Page';
import CompanyData from 'Pages/Company/Data';

export const routes = [{
  name: 'Home',
  path: '/',
  component: { render: (h) => h('router-view') },
  children: [
    {
      path: 'company',
      component: Company,
      children: [
        {
          name: 'Company Page',
          path: '',
          component: CompanyPage,
        },
        {
          name: 'Company Data',
          path: 'data',
          component: CompanyData,
        },
      ],
    },
  ],
}]
