<template>
  <div class="bg-blue-800">
    <!-- CONTENEDOR CON EL LIMITE DE CRECIMIENTO -->
    <div class="max-w-screen-xl px-2">
      <!-- CONTENEDOR CON EL FLEX -->
      <div class="flex justify-between items-center">
        <figure>
          <img src="@/assets/logo-procorex-negro.png" alt="logo-procorex">
        </figure>
        <div class="container px-0">
          <nav>
            <ul class="container flex justify-between items-center">
              <li>
                <nuxt-link>
                  Productos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link>
                  Catálogos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link>
                  Quienes somos
                </nuxt-link>
              </li>
              <li>
                <nuxt-link>
                  Contáctanos
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>