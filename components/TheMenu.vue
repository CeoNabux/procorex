<template>
  <div class="bg-gray-100 menu" :class="{'menu-hidden':!show}">
    <div class="container flex flex-row justify-center items-center">
      <div class="container flex flex-end items-center">
        <button class="w-8 h-8" @click="showMenu">
          <p-icon name="close" class="text-pink-700" />
        </button>
      </div>
      <nav class="w-full h-full flex flex-row">
      <ul class="container flex justify-between items-center">
        <li class="cursor-pointer my-4" v-for="(item, i) in menu" :key="i">
          <nuxt-link class="text-yellow-600 text-2xl font-semibold" :to="item.path">
            {{item.name}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
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
    }
  }
}
</script>
<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 50%;
  right: 0;
  z-index: 50;
  transition-duration: 200ms;
  transition-timing-function: ease-in;
}
.menu-hidden {
  transform: translateX(100%);
}
</style>