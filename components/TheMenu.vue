<template>
  <div class="bg-gray-100 menu p-2" :class="{'menu-hidden':!show}">
    <div class="w-full flex flex-col items-center">
      <div class="w-full flex items-center mt-4">
        <nav class="w-full px-2">
          <ul class="w-full flex flex-col justify-between items-center">
            <div class="w-full flex justify-end items-center">
              <button class="w-8 h-8 rounded-full bg-blue-600 p-2 focus:outline-none" @click="closeMenu">
                <p-icon name='close' class="text-blue-50"></p-icon>
              </button>
            </div>
            <li class="flex justify-between items-center cursor-pointer my-4 w-full" v-for="(item, i) in menu" :key="i">
              <nuxt-link class="text-yellow-600 text-lg font-semibold" :to="item.path">
                {{item.name}}
              </nuxt-link>
              <span class="w-6 h-6">
                <p-icon name='arrowRight' class="text-yellow-600" />
              </span>
            </li>
            <div class="w-full flex items-center mt-4">
              <p class="text-xl text-blue-600 font-semibold">
                Te recordamos que puedes visitarnos en...
              </p>
            </div>
          </ul>
        </nav>
      </div>
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
    closeMenu() {
      if (this.show) {
        return this.activeMenu(false)
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
  bottom: 0;
  right: 0;
  z-index: 50;
  transition-duration: 200ms;
  transition-timing-function: ease-in;
}
.menu-hidden {
  transform: translateX(100%);
}
</style>