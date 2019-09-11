import AppLayout from 'Pages/AppLayout.vue'
import Company from 'Pages/Company'
import CompanyPage from 'Pages/Company/Page'
import CompanyData from 'Pages/Company/Data'

export const routes = [{
  meta: { label: 'Home' },
  name: 'home',
  path: '/',
  component: AppLayout,
  children: [
    {
      path: 'company',
      component: Company,
      children: [
        {
          meta: { label: 'Company Page' },
          name: 'home.company.page',
          path: '',
          component: CompanyPage,
        },
        {
          meta: { label: 'Company Data' },
          name: 'home.company.data',
          path: 'data',
          component: CompanyData,
        },
      ],
    },
  ],
}]
