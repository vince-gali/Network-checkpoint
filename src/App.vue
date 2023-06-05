<template>
  <header>
    <Navbar />
  </header>

  <main>
    <div class="d-flex">
      <div class="col-8">
        <router-view />
      </div>

      <div class="col-2">
        <div class="col-2" v-for="b in banners">
          <BannerCard :bannerProp="b"/>
        </div>
      </div>
    </div>
  </main>


   <footer class="footer-sty text-light">
    
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

.footer-sty{
  background-color: rgb(32, 155, 155);
}
</style>
