<template>
  <input
    v-bind="$attrs"
    class="ui-input"
    :class="{
      'ui-input--error': error
    }"
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event)"
  >
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const listeners = {...this.$listeners}

      delete listeners.input
      // removing blur event to work around a bug in VeeValidate
      delete listeners.blur

      return listeners
    },
  },
}
</script>

<style lang="scss" src="./UIInput.scss"></style>
