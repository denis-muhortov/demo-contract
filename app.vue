<script lang="ts" setup>
  const nuxtApp = useNuxtApp();

  nuxtApp.hook("page:transition:finish", () => {
    const app = document.querySelector(".app");
    app.scrollTo(0, 0);
  });
</script>
<script lang="ts">
export default {
    data: () => ({
        store: useAppStore(),
    }),
    methods: {
    },
    mounted(){

    },
    computed:{

    },
}
</script>

<template>
  <NuxtLayout class="layout">
    <NuxtLayout name="header" class="header">
      <theHeader/>
    </NuxtLayout>
    <NuxtLayout class="app">
      <NuxtLoadingIndicator color="black" :height="5" :throttle="0" :duration="1000"/>
      <NuxtPage/>
    </NuxtLayout>
    <NuxtLayout name="footer" class="footer">
      <theFooter/>
    </NuxtLayout>
  </NuxtLayout>
</template>

<style>
.layout{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
}
.app {
  display: flex;
  flex-grow: 1;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 120px;
  flex-shrink: 0;
  z-index: 10;
}
.footer{
  display: flex;
  height: 64px + 50px;
  flex-shrink: 0;
  margin: 100px 0 0 0;
}

@media screen and (max-width: 1020px) {
  .header{
    height: 80px;
  }
}
</style>
