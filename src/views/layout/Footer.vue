<template>
  <footer>
      <div>{{msg}}</div>
  </footer>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
</style>
