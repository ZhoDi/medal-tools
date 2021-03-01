<template>
  <header>
      <img src="@/assets/images/logo.png" alt="logo-小勋章">
  </header>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang="scss">
</style>