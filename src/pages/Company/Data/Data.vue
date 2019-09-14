<template>
  <UICard
    v-ui:cell="9"
    padding="medium"
  >
    <UIText tag="p">
      Sit assumenda deleniti ipsum mollitia error. Omnis quaerat error laboriosam deleniti sint Alias aliquam temporibus esse qui quibusdam! Eum blanditiis eligendi iure neque eius. Autem eum omnis tempore nulla eveniet
    </UIText>

    <UIGrid>
      <UIInputField
        v-ui:cell="6"
        label="Company Name"
      >
        <UIInput placeholder="e.g. Your Company Name" />
      </UIInputField>

      <UIInputField
        v-ui:cell="6"
        v-ui:row="2"
        label="Company Spend"
      >
        <UIInput placeholder="e.g. $150,000" />
      </UIInputField>

      <UIInputField
        v-ui:cell="6"
        v-ui:row="3"
        label="Company Spend Ability"
      >
        <UIInput placeholder="e.g. $150,000 - $300,000" />
      </UIInputField>

      <UIInputField
        v-ui:cell="12"
        label="Notes"
      >
        <UITextarea
          placeholder="e.g. Good Tech Company"
          rows="10"
          @click="$router.push({hash: 'aditional-notes'})"
        />
      </UIInputField>

      <UIDialog
        title="Aditional Notes"
        url-hash="#aditional-notes"
      >
        <UITextarea
          placeholder="e.g. Good Tech Company"
          rows="10"
          @click="$router.push({hash: 'aditional-notes'})"
        />
      </UIDialog>
    </UIGrid>
  </UICard>
</template>
