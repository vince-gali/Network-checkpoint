<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div class="col-2" v-for="b in banners">
      <BannerCard :bannerProp="b"/>
    </div>
  </main>
   <footer class="bg-dark text-light">
    
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { bannersService } from './services/BannersService.js'
import Pop from './utils/Pop.js'

export default {
  setup() {

    async function getBanner(){
      try {
        await bannersService.getBanner()
      } catch (error) {
        Pop.error(error)
      }
        
    }

    onMounted(()=> {
      getBanner()
    })
    return {
      appState: computed(() => AppState),
      banners: computed(()=> AppState.banners)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
