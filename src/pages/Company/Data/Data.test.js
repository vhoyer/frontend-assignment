import Data from '.'
import flushPromises from 'flush-promises'
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as companyStore from 'Store/company'
import UIInputField from 'UI/UIInputField'
import UIInput from 'UI/UIInput'
import UIText from 'UI/UIText'
import UITextarea from 'UI/UITextarea'
import UIDialog from 'UI/UIDialog'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()
const store = () => new Vuex.Store({
  modules: {
    company: {
      namespaced: true,
      ...companyStore,
    },
  },
})

describe('Pages > Company Data', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Data, {
      localVue,
      router,
      store,
    })
  })

  afterEach(() => {
    router.push({ hash: '' }).catch(() => {})
  })

  it('shows company fields', () => {
    expect(wrapper.findAll(UIInputField).length).toBe(4)
  })

  it('starts with dialog closed', () => {
    expect(wrapper.find(UIDialog).isVisible()).toBe(false)
  })

  describe('when user focus on company name field', () => {
    const fieldCompanyName = () => wrapper.findAll(UIInputField).at(0)

    beforeEach(async () => {
      fieldCompanyName().find(UIInput).trigger('focus')
      await flushPromises()
    })

    describe('when user blurs out from field', () => {
      beforeEach(async () => {
        fieldCompanyName().find(UIInput).trigger('blur')
        await flushPromises()
      })

      it('shows the error message', () => {
        expect(fieldCompanyName().findAll(UIText).length).toBe(2)
        expect(fieldCompanyName().findAll(UIText).at(1).text()).toBe('Please fill the Company Name field')
      })
    })

    describe('when user types something', () => {
      beforeEach(async () => {
        fieldCompanyName().find(UIInput).setValue('Giggle')
        fieldCompanyName().find(UIInput).trigger('blur')
        await flushPromises()
      })

      it('updates store value', () => {
        expect(wrapper.vm.$store.state.company.name).toBe('Giggle')
      })

      it('shows no errors', () => {
        expect(fieldCompanyName().findAll(UIText).length).toBe(1)
      })
    })
  })

  describe('when user focus on company spend field', () => {
    const fieldCompanySpend = () => wrapper.findAll(UIInputField).at(1)

    beforeEach(async () => {
      fieldCompanySpend().find(UIInput).trigger('focus')
      await flushPromises()
    })

    describe('when user types something', () => {
      beforeEach(async () => {
        fieldCompanySpend().find(UIInput).setValue('1000')
        fieldCompanySpend().find(UIInput).trigger('blur')
        await flushPromises()
      })

      it('updates store value', () => {
        expect(wrapper.vm.$store.state.company.spend).toBe(1000)
      })

      it('formats text', () => {
        expect(fieldCompanySpend().find(UIInput).attributes('value')).toBe('$1,000')
      })
    })
  })

  describe('when user focus on company spend ability field', () => {
    const fieldCompanySpendAbility = () => wrapper.findAll(UIInputField).at(2)

    beforeEach(async () => {
      fieldCompanySpendAbility().find(UIInput).trigger('focus')
      await flushPromises()
    })

    it('shows no errors', () => {
      expect(fieldCompanySpendAbility().findAll(UIText).length).toBe(1)
    })

    describe('when user types something', () => {
      beforeEach(async () => {
        fieldCompanySpendAbility().find(UIInput).setValue('1000 - 2000')
        fieldCompanySpendAbility().find(UIInput).trigger('blur')
        await flushPromises()
      })

      it('shows no errors', () => {
        expect(fieldCompanySpendAbility().findAll(UIText).length).toBe(1)
      })

      it('formats text', () => {
        expect(fieldCompanySpendAbility().find(UIInput).attributes('value')).toBe('$1,000 - $2,000')
      })

      it('updates store value', () => {
        expect(wrapper.vm.$store.state.company.spendAbility).toEqual({
          maximum: 2000,
          minimum: 1000,
        })
      })

      describe('when user types invalid data', () => {
        beforeEach(async () => {
          fieldCompanySpendAbility().find(UIInput).setValue('3000 - 2000')
          fieldCompanySpendAbility().find(UIInput).trigger('blur')
          await flushPromises()
        })

        it('shows the error message', () => {
          expect(fieldCompanySpendAbility().findAll(UIText).length).toBe(2)
          expect(fieldCompanySpendAbility().findAll(UIText).at(1).text()).toBe("The first value shouldn't be greater than the second")
        })
      })
    })
  })

  describe('when user focus on company notes field', () => {
    const fieldCompanyNote = () => wrapper.findAll(UIInputField).at(3)
    const dialogCompanyNote = () => wrapper.find(UIDialog)

    beforeEach(async () => {
      fieldCompanyNote().find(UITextarea).trigger('focus')
      await flushPromises()
    })

    it('does not open dialog', () => {
      expect(wrapper.find(UIDialog).isVisible()).toBe(false)
    })

    describe('when user types something in the company notes field', () => {
      beforeEach(async () => {
        fieldCompanyNote().find(UITextarea).trigger('keydown', {
          key: 'a',
        })
        await flushPromises()
      })

      it('opens dialog', () => {
        expect(wrapper.find(UIDialog).isVisible()).toBe(true)
      })

      describe('when user types on the text read on dialog', () => {
        beforeEach(async () => {
          dialogCompanyNote().find(UITextarea).setValue('this is so much fun!!')
          dialogCompanyNote().find(UITextarea).trigger('blur')
          await flushPromises()
        })

        it('updates store value', () => {
          expect(wrapper.vm.$store.state.company.notes).toEqual('this is so much fun!!')
        })
      })
    })

    describe('when user presses Tab while focused on the company notes field', () => {
      beforeEach(async () => {
        fieldCompanyNote().find(UITextarea).trigger('keydown', {
          key: 'Tab',
        })
        await flushPromises()
      })

      it('does not open dialog', () => {
        expect(wrapper.find(UIDialog).isVisible()).toBe(false)
      })
    })
  })
})
