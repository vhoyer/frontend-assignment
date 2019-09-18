<template>
  <ValidationProvider
    v-bind="$attrs"
    :name="label"
    tag="label"
    class="ui-input-field"
    #default="{ errors }"
  >
    <UIText type="caption">
      {{ label }}
    </UIText>

    <slot />
    {{ errors[0] }}
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
extend('required', {
  validate: value => Boolean(value),
  message: 'Please fill the {_field_} field',
})

export default {
  components: {
    ValidationProvider,
  },
  props: {
    label: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" src="./UIInputField.scss"></style>
