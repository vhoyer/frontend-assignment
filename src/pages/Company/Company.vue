<template>
  <UIGrid>
    <AppBreadcrumb v-ui:cell="12" />

    <NavigationPanel
      v-ui:cell="3"
      :for-sibilings-of-route="$route.name"
    />

    <RouterView v-ui:cell="9" />
  </UIGrid>
</template>

<script>
import AppBreadcrumb from 'Components/AppBreadcrumb'
import NavigationPanel from 'Components/NavigationPanel'

export default {
  components: {
    AppBreadcrumb,
    NavigationPanel,
  },
}
</script>
