import UIButton from '.'
import { mount } from '@vue/test-utils'

describe('UI > UIButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIButton, {
      slots: {
        default: 'Pegasasu no fantaji! Sousa yume dake ha',
      },
    })
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('renders text passed to slot', () => {
    expect(wrapper.text()).toBe('Pegasasu no fantaji! Sousa yume dake ha')
  })

  it('renders button with type="button" by default', () => {
    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.attributes('type')).toBe('button')
  })
})
