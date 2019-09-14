import Vue from 'vue'
import {
  cell,
  row,
} from './UIGrid'

const directives = {
  cell,
  row,
}

const module = (hook) => ({
  [hook]: function(el, context) {
    const { arg } = context

    const currentDirective = directives[arg] || {}
    const hookFunction = currentDirective[hook]

    if (typeof hookFunction === 'function') {
      hookFunction(el, context)
    }
  }
})

Vue.directive('ui', {
  ...module('inserted'),
})
