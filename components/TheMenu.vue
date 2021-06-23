<template>
  <div class="bg-gray-100 menu p-2" :class="{'menu-hidden':!show}">
    <div class="w-full flex flex-col items-center">
      <div class="w-full flex items-center mt-4">
        <nav class="w-full px-2">
          <ul class="w-full flex flex-col justify-between items-center">
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
  top: 112px;
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