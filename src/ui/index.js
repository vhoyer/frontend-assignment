import './directives'
import UIText from './UIText'
import UILink from './UILink'
import UIGrid from './UIGrid'
import UICard from './UICard'
import UIInput from './UIInput'
import UIInputField from './UIInputField'
import UITextarea from './UITextarea'
import UIDialog from './UIDialog'
import UIButton from './UIButton'
import UIButtonGroup from './UIButtonGroup'

export default (Vue, { linkComponent = 'router-link' } = {}) => {
  Vue.component('UIText', UIText)
  Vue.component('UILink', UILink)
  Vue.component('UIGrid', UIGrid)
  Vue.component('UICard', UICard)
  Vue.component('UIInput', UIInput)
  Vue.component('UIInputField', UIInputField)
  Vue.component('UITextarea', UITextarea)
  Vue.component('UIDialog', UIDialog)
  Vue.component('UIButton', UIButton)
  Vue.component('UIButtonGroup', UIButtonGroup)

  Vue.mixin({
    provide: {
      UILinkComponent: linkComponent,
    },
  })
}
