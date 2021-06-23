<template>
  <div>
    <div class="bg-yellow-300" :class="{['hidden']:isMessageActive}">
      <div class="max-w-screen-xl flex justify-between items-center px-4 py-1">
        <p class="text-yellow-600 font-semibold text-sm">
          Sabemos que el COVID-19 ha sido complicado, es por eso que la familia de Procorex te acompaña para ayudarte en tus soluciones
        </p>
        <button class="w-5 h-5 focus:outline-none" @click='closeMessage'>
          <p-icon name='close' class="text-yellow-600" />
        </button>
      </div>
    </div>
    <div class="bg-blue-800">
      <!-- CONTENEDOR CON EL LIMITE DE CRECIMIENTO -->
      <div class="max-w-screen-xl mx-auto px-2 flex flex-col">
        <!-- PRIMERA SECCION DEL HEADER PARA EMPRESA Y FILTROS -->
        <div class="w-full flex justify-between items-center">
          <figure class="w-44 ml-3">
            <img
              class="logo-filtered"
              src="@/assets/logo-procorex-negro.png"
              alt="logo-procorex"
            />
          </figure>
          <div class="flex items-center justify-end w-3/5 menu">
            <div class="flex justify-start items-center mr-4">
              <p class="text-blue-100 font-light mr-2">¿Necesitas ayuda?</p>
              <p class="text-blue-100 font-medium">+593 1122334455</p>
            </div>
            <div
              class="w-60 shadow rounded-xl h-11 flex justify-between items-center bg-blue-200 focus:bg-gray-50 px-4"
            >
              <button class="w-7 h-7 focus:outline-none">
                <p-icon name='search' class="text-blue-300" />
              </button>
              <input type="text" class="bg-blue-200" />
            </div>
          </div>
          <button class="w-8 h-8 p-1 shadow-md rounded-full bg-blue-200 menu-button">
            <p-icon name="search" class="text-blue-300"></p-icon>
          </button>
        </div>
      </div>
      <div class="bg-white border-b border-blue-700 mobile-menu">
        <div class="max-w-screen-xl">
          <!-- SEGUNDA SECCION PARA EL MENU -->
          <div class="flex justify-center py-2">
            <div class="container w-3/5 pr-2 menu">
              <nav>
                <ul class="container flex justify-between items-center">
                  <li class="cursor-pointer" v-for="(item, i) in menu" :key="i">
                    <nuxt-link
                      class="text-blue-800 text-lg font-semibold"
                      :to="item.path"
                    >
                      {{ item.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              v-if="!show"
              class="container w-6 h-6 px-0 menu-button focus:outline-none"
              @click="showMenu"
            >
              <p-icon name="menu" class="text-yellow-600" />
            </button>
            <button
              v-else
              class="w-6 h-6 focus:outline-none"
              @click="showMenu"
              v-on-clickaway="closeMenu"
            >
              <p-icon name="close" class="text-pink-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PIcon from "./global/PIcon.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { PIcon },
  data: () => ({
    isMessageActive:false,
    menu: [
      { name: "Productos", path: "/products" },
      { name: "Catálogos", path: "/catalogue" },
      { name: "Quiénes somos", path: "/procorex" },
      { name: "Contáctanos", path: "/contact" }
    ]
  }),
  computed: {
    ...mapGetters("config_drawer", ["show"])
  },
  methods: {
    ...mapActions("config_drawer", ["activeMenu"]),
    showMenu() {
      if (this.show) {
        return this.activeMenu(false);
      } else {
        return this.activeMenu(true);
      }
    },
    closeMenu() {
      if (this.show) {
        return this.activeMenu(false);
      }
    },
    closeMessage() {
      if (!this.isMessageActive) {
        console.log(this.isMessageActive)
        return this.isMessageActive=true
      }
    }
  }
};
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
  .mobile-menu {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
