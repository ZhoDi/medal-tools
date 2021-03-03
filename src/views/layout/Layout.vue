<template>
  <div id="app-content">
    <Header :msg="msg"></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/views/layout/Footer.vue";
import Header from "@/views/layout/Header.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Layout extends Vue {
  private msg: string = "你好!";
}
</script>

<style scoped lang="scss"></style>
