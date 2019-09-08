import AppLayout from 'Pages/AppLayout.vue'
import Company from 'Pages/Company'
import CompanyPage from 'Pages/Company/Page'
import CompanyData from 'Pages/Company/Data'

export const routes = [{
  name: 'Home',
  path: '/',
  component: AppLayout,
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
