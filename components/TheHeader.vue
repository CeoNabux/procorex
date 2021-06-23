<template>
  <div class="bg-blue-800">
    <!-- CONTENEDOR CON EL LIMITE DE CRECIMIENTO -->
    <div class="max-w-screen-xl mx-auto px-2 h-28 flex items-center">
      <!-- CONTENEDOR CON EL FLEX -->
      <div class="w-full flex justify-between items-center pr-5">
        <figure class="w-44 ml-3">
          <img class="logo-filtered" src="@/assets/logo-procorex-negro.png" alt="logo-procorex">
        </figure>
        <div class="container w-3/5 pr-2 menu">
          <nav>
            <ul class="container flex justify-between items-center">
              <li class="cursor-pointer" v-for="(item, i) in menu" :key="i">
                <nuxt-link class="text-white text-lg font-semibold" :to="item.path">
                  {{item.name}}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <button v-if="!show" class="container w-6 h-6 px-0 menu-button focus:outline-none" @click="showMenu">
          <p-icon name="menu" class="text-white" />
        </button>
        <button v-else class="w-6 h-6 focus:outline-none" @click="showMenu" v-on-clickaway='closeMenu' >
          <p-icon name="close" class="text-pink-700" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PIcon from './global/PIcon.vue'
import {mapActions , mapGetters} from 'vuex'
export default {
  components: { PIcon },
  data: () => ({
    menu: [
      { name: 'Productos', path: '/products'},
      { name: 'Catálogos', path: '/catalogue'},
      { name: 'Quiénes somos', path: '/procorex'},
      { name: 'Contáctanos', path: '/contact'},
    ]
  }),
  computed: {
    ...mapGetters('config_drawer', ['show'])
  },
  methods: {
    ...mapActions('config_drawer', ['activeMenu']),
    showMenu() {
      if (this.show) {
        return this.activeMenu(false)
      } else {
        return this.activeMenu(true)
      }
    },
    closeMenu() {
      if(this.show) {
        return this.activeMenu(false)
      }
    }
  }
}
</script>

<style scoped>
.logo-filtered {
  filter: invert(1);
}

.menu-button {
  display: none;
}

@media only screen and (max-width: 767px) {
  .menu {
    display: none;
  }
  .menu-button {
    display: flex;
  }
}
</style>