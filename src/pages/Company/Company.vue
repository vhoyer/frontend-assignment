<template>
  <UIGrid>
    <AppBreadcrumb v-ui:cell="12" />

    <UICard v-ui:cell="3">
      lorem
    </UICard>

    <RouterView v-ui:cell="9" />
  </UIGrid>
</template>

<script>
import AppBreadcrumb from 'Components/AppBreadcrumb'

export default {
  components: {
    AppBreadcrumb,
  },
}
</script>
