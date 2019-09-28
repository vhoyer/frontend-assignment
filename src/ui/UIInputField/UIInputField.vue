<template>
  <ValidationProvider
    ref="validator"
    v-bind="$attrs"
    :name="label"
    tag="label"
    class="ui-input-field"
    #default="{ errors }"
  >
    <UIText
      variant="caption"
      :error="!!errors.length"
    >
      {{ label }}
    </UIText>

    <slot :has-error="!!errors.length" />

    <UIText
      v-if="errors.length"
      size="small"
      error
    >
      {{ errors[0] }}
    </UIText>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required, min_value } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Please fill the {_field_} field',
})

extend('min_value', {
  ...min_value,
  message: 'Please insert a positive number in {_field_} field',
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
  methods: {
    setErrors() {
      this.$refs.validator.setErrors(...arguments)
    },
  },
}
</script>

<style lang="scss" src="./UIInputField.scss"></style>
