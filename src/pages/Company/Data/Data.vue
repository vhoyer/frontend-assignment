<template>
  <UICard
    v-ui:cell="9"
    padding="medium"
  >
    <UIText tag="p">
      Sit assumenda deleniti ipsum mollitia error. Omnis quaerat error laboriosam deleniti sint Alias aliquam temporibus esse qui quibusdam! Eum blanditiis eligendi iure neque eius. Autem eum omnis tempore nulla eveniet
    </UIText>

    <UIGrid margins="top">
      <UIInputField
        v-ui:cell="6"
        label="Company Name"
        rules="required"
        #default="{ hasError }"
      >
        <UIInput
          v-model="company.name"
          :error="hasError"
          placeholder="e.g. Your Company Name"
        />
      </UIInputField>

      <UIInputField
        v-ui:cell="6"
        v-ui:row="2"
        label="Company Spend"
        #default="{ hasError }"
      >
        <UIInput
          :error="hasError"
          placeholder="e.g. $150,000"
          @blur="onCompanySpendBlur"
        />
      </UIInputField>

      <UIInputField
        ref="spendAbility"
        v-ui:cell="6"
        v-ui:row="3"
        label="Company Spend Ability"
        #default="{ hasError }"
      >
        <UIInput
          :error="hasError"
          placeholder="e.g. $150,000 - $300,000"
          @blur="updateSpendAbility"
        />
      </UIInputField>

      <UIInputField
        v-ui:cell="12"
        label="Notes"
      >
        <UITextarea
          placeholder="e.g. Good Tech Company"
          rows="10"
          :value="company.notes"
          @focus="$router.push({hash: 'aditional-notes'})"
        />
      </UIInputField>

      <UIDialog
        title="Aditional Notes"
        url-hash="#aditional-notes"
        #default="{ submit }"
      >
        <UITextarea
          v-model="company.notes"
          placeholder="e.g. Good Tech Company"
          rows="10"
          @click="$router.push({hash: 'aditional-notes'})"
        />

        <UIButtonGroup>
          <UIButton @click="submit">
            Save
          </UIButton>
        </UIButtonGroup>
      </UIDialog>
    </UIGrid>
  </UICard>
</template>

<script>
export default {
  data: () => ({
    company: {},
  }),
  methods: {
    onCompanySpendBlur($event) {
      this.company.spend = this.forceNumber($event.target.value)

      $event.target.value = this.formatCurrency(this.company.spend)
    },
    updateSpendAbility($event) {
      if (!$event.target.value) return

      const { setErrors } = this.$refs.spendAbility
      const { target: { value } } = $event

      const [minimum, maximum] = value.split(/\s*-\s*/).map(this.forceNumber)

      const hasValidationError = minimum > maximum

      if (hasValidationError) {
        setErrors(["The first value shouldn't be greater than the second"])
      } else {
        setErrors([])
      }

      this.company.spendAbility = {
        maximum,
        minimum,
      }
    },
    forceNumber(value) {
      return Number(value.replace(/[^.\d]/g, ''))
    },
    formatCurrency(value) {
      return '$' + Number(value).toLocaleString({
        locale: 'us',
        style: 'currency',
        currency: 'USD',
      })
    },
  },
}
</script>
