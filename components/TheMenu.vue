<template>
  <div v-if="open" class="bg-gray-100 w-screen h-screen">
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
</template>

<script>
export default {
  data: () => ({
    menu: [
      { name: 'Productos', path: '/products'},
      { name: 'Catálogos', path: '/catalogue'},
      { name: 'Quiénes somos', path: '/procorex'},
      { name: 'Contáctanos', path: '/contact'},
    ]
  })
}
</script>
