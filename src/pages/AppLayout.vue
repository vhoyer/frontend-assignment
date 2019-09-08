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

<style lang="scss">
:root {
  --color-primary-light: #5d699a;
  --color-primary-pure: #394783;
  --color-primary-dark: #344279;

  --color-accent: #ff3c6a;

  --color-neutral-white: #ffffff;
  --color-neutral-lighter: #f3f3f3;
  --color-neutral-light: #b1b1b1;
  --color-neutral-pure: #aaaaaa;
  --color-neutral-dark: #7e7e7e;
  --color-neutral-darker: #505050;
}

body {
  margin: 0;
}
</style>
