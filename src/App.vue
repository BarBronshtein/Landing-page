<template>
  <main class="main-layout">
    <app-header />
    <router-view />
    <app-footer />
  </main>
</template>

<script>
import appHeader from './components/app-header.cmp.vue'
import appFooter from './components/app-footer.cmp.vue'
export default {
  name: 'App',
  components: { appHeader, appFooter }
}
</script>