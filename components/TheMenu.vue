<template>
  <div class="bg-gray-100 menu p-2" :class="{'menu-hidden':!show}">
    <div class="w-full flex flex-col items-center">
      <div class="w-full flex items-center mt-4">
        <nav class="w-full px-2">
          <ul class="w-full flex flex-col justify-between items-center">
            <div class="w-full flex justify-end items-center">
              <button class="w-8 h-8 rounded-full bg-yellow-500 p-2 focus:outline-none" @click="closeMenu">
                <p-icon name='close' class="text-blue-50"></p-icon>
              </button>
            </div>
            <li class="flex justify-between items-center cursor-pointer my-4 w-full" v-for="(item, i) in menu" :key="i">
              <nuxt-link class="text-yellow-500 text-lg font-bebas" :to="item.path">
                {{item.name}}
              </nuxt-link>
              <span class="w-6 h-6">
                <p-icon name='arrowRight' class="text-yellow-600" />
              </span>
            </li>
            <div class="w-full flex items-center mt-4">
              <p class="text-xl text-blue-600 font-bebas">
                Te recordamos que puedes visitarnos en <a class="text-xl font-bebas text-yellow-500 underline" href="https://www.google.com/maps/dir//Ferreteria+Industrial+Procorex+S.A.,+Guayaquil+090606/@-2.1268001,-79.929434,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x902d72a4bae55287:0xc6ac4af353505699!2m2!1d-79.929548!2d-2.1256179" target="_blank">Nuestras oficinas</a>
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
      { name: 'Home', path: '/'},
      { name: 'Productos', path: '/productos'},
      { name: 'Catálogos', path: '/catalogos'},
      { name: 'Blog', path: '/blog'},
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