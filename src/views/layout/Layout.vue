<template>
  <div id='app-content'>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/views/layout/Footer.vue';
import Header from '@/views/layout/Header.vue';

@Component({
    components: {
        Header,
        Footer
    }
})
export default class Layout extends Vue {
}
</script>

<style scoped lang="scss">

</style>
