<template>
  <header>
    <img src="@/assets/images/logo.png" alt="logo-小勋章" />
    <h1>{{ msgData }}</h1>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop({ type: Number, default: "" })
  private msg!: string;

  private msgData!: string;

  private beforeMount() {
    this.msgData = this.msg;
  }
}
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
