import UIDialog from './UIDialog.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

describe('UI > UIDialog', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIDialog, {
      localVue,
      router,
      propsData: {
        title: "That's the dialog title",
        urlHash: '#yup-thats-me',
      },
      scopedSlots: {
        default: '<button id="btn" @click="props.submit(1)">content being rendered</button>',
      },
    })
  })

  afterEach(() => {
    router.push({ hash: '' }).catch(() => {})
  })

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('starts closed', () => {
    expect(wrapper.isEmpty()).toBe(true)
  })

  describe('when route hash is set to a different hash than urlHash', () => {
    beforeEach(() => {
      router.push({ hash: 'noop-thats-not-me' }).catch(() => {})
    })

    it('keeps closed', () => {
      expect(wrapper.isEmpty()).toBe(true)
    })
  })

  describe('when route hash is set to the same as the urlHash', () => {
    beforeEach(() => {
      router.push({ hash: 'yup-thats-me' }).catch(() => {})
    })

    it('is active', () => {
      expect(wrapper.isEmpty()).toBe(false)
    })

    it('sets title to the value passed', () => {
      expect(wrapper.find('.test-title').text()).toMatch("That's the dialog title")
    })

    it('displays content passed onto slot', () => {
      expect(wrapper.find('#btn').exists()).toBe(true)
    })

    describe('when route hash changes', () => {
      beforeEach(() => {
        router.push({hash:'noop-thats-not-me-again'}).catch(() => {})
      })

      it('closes again', () => {
        expect(wrapper.isEmpty()).toBe(true)
      })
    })

    describe('when user clicks onto backdrop', () => {
      beforeEach(() => {
        wrapper.find('.test-backdrop').trigger('click')
      })

      it('closes', () => {
        expect(wrapper.isEmpty()).toBe(true)
      })

      it('clears hash', () => {
        expect(wrapper.vm.$route.hash).toBe('')
      })
    })

    describe('when user clicks onto close button', () => {
      beforeEach(() => {
        wrapper.find('.test-close-button').trigger('click')
      })

      it('closes', () => {
        expect(wrapper.isEmpty()).toBe(true)
      })

      it('clears hash', () => {
        expect(wrapper.vm.$route.hash).toBe('')
      })
    })

    describe('when user clicks onto a submit button on the slot', () => {
      beforeEach(() => {
        wrapper.find('#btn').trigger('click')
      })

      it('emmits a submit event with the value passed into submit slot prop', () => {
        expect(wrapper.emitted('submit').length).toBe(1)
        expect(wrapper.emitted('submit')[0]).toEqual([1])
      })

      it('closes the dialog', () => {
        expect(wrapper.isEmpty()).toBe(true)
      })

      it('clears hash', () => {
        expect(wrapper.vm.$route.hash).toBe('')
      })
    })
  })
})
