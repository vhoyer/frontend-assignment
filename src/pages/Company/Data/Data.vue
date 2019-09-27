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
      >
        <UIInput
          v-model="company.name"
          placeholder="e.g. Your Company Name"
        />
      </UIInputField>

      <UIInputField
        v-ui:cell="6"
        v-ui:row="2"
        label="Company Spend"
      >
        <UIInput
          placeholder="e.g. $150,000"
          @blur="onCompanySpendBlur"
        />
      </UIInputField>

      <UIInputField
        ref="spendAbility"
        v-ui:cell="6"
        v-ui:row="3"
        label="Company Spend Ability"
      >
        <UIInput
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
      const stripUnvalid = this.stripUnvalidNumericCharacters($event.target.value)
      this.company.spend = Number(stripUnvalid)

      $event.target.value = '$' + this.company.spend.toLocaleString({
        locale: 'us',
        style: 'currency',
        currency: 'USD',
      })
    },
    stripUnvalidNumericCharacters(value) {
      return value.replace(/[^.\d]/g, '')
    },
    updateSpendAbility($event) {
      if (!$event.target.value) return

      const { setErrors } = this.$refs.spendAbility
      const [minimum, maximum] = $event.target.value.split(' - ')

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
  },
}
</script>
