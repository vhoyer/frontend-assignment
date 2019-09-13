import { shallowMount } from '@vue/test-utils'
import UIInputField from './UIInputField.vue'
import UIText from 'UI/UIText'

describe('UI > UIInputField', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UIInputField, {
      propsData: {
        label: 'sudo work',
      },
      slots: {
        default: '<input type="text">',
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders an UIText as a label with the given text', () => {
    expect(wrapper.find(UIText).is('label'))
  })

  it('renders the text passed in the prop', () => {
    expect(wrapper.find(UIText).text()).toBe('sudo work')
  })

  it('renders the default slot passed to it', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
