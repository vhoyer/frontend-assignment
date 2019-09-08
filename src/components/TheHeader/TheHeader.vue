<template>
  <nav class="the-header">
    <UILink
      to="/company"
      class="test-company-link"
    >
        Company
    </UILink>
  </nav>
</template>

<style lang="scss" scoped>
.the-header {
  display: flex;
  align-items: center;

  height: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  background-color: var(--color-primary-pure);
  color: var(--color-neutral-lighter);
}
</style>
