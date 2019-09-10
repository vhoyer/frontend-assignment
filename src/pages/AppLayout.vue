<template>
  <div>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from 'Components/TheHeader'
import TheFooter from 'Components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
