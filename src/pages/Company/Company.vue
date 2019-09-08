<template>
  <div>
    <AppBreadcrumb />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from 'Components/AppBreadcrumb'

export default {
  components: {
    AppBreadcrumb,
  },
}
</script>
