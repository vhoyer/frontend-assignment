<template>
  <textarea
    v-bind="$attrs"
    class="ui-textarea"
    v-on="listeners"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event)"
  />
</template>

<script>
export default {
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

<style lang="scss" src="./UITextarea.scss"></style>
