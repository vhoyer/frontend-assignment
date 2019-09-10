<template>
  <UIGrid>
    <AppBreadcrumb v-ui:cell="12" />
    <div>
      <RouterView />
    </div>
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
