import UIGrid from './UIGrid.vue'
import { shallowMount } from '@vue/test-utils'

describe('UI > UIGrid', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(UIGrid)
  })

  it('renders a div by default', () => {
    expect(wrapper.is('div')).toBe(true)
  })

  it('renders with the default margin classes', () => {
    expect(wrapper.classes('ui-grid--top')).toBe(true)
    expect(wrapper.classes('ui-grid--bottom')).toBe(true)
  })

  describe('when margins prop is passed', () => {
    beforeEach(() => {
      wrapper.setProps({ margins: 'left right' })
    })

    it('renders the margin classes respective to what was passed', () => {
      expect(wrapper.classes('ui-grid--left')).toBe(true)
      expect(wrapper.classes('ui-grid--right')).toBe(true)
    })
  })
})
