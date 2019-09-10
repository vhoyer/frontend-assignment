<template>
  <UIGrid>
    <AppBreadcrumb v-ui:cell="12" />

    <RouterView v-ui:cell="'2/4/2/-1'" />
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
