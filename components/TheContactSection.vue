<template>
  <div class="w-full bg-gray-100 mt-16 py-16 px-12">
    <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
      <figure class="w-full lg:w-2/5 flex justify-center items-center mb-16 lg:mb-0">
        <img src="@/assets/logos/procorex-imagotipo.png" alt="logo-procorex" class="w-1/5 lg:w-2/5">
      </figure>
      <div class="w-full lg:w-3/5 flex flex-col justify-center items-start lg:flex-row lg:justify-center lg:items-start">
        <div class="w-full lg:w-1/3 mb-12 lg:mb-0">
          <p class="text-blue-900 font-light text-xl">
            Necesitas ayuda?
          </p>
          <p class="text-blue-900 font-bold text-3xl">
            2266450
          </p>
          <p class="text-gray-800 font-medium text-lg">
            Lunes - Viernes: 8:00-18:00 <br/>
            Sábado: 8:00-15:00
          </p>
        </div>
        <div class="w-full lg:w-1/3">
          <p class="text-blue-900 font-light text-xl">
            Encuéntranos en nuestras redes
          </p>
          <div class="flex flex-col lg:flex-row justify-between items-center py-4 pr-8">
            <a :href="item.link" v-for="(item, i) in social" :key="i" class="w-7 h-7 focus:outline-none mb-6 lg:mb-0">
              <p-icon :name='item.name' class="text-blue-900" />
            </a>
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <p class="text-blue-900 font-light text-xl">
            Nuestras oficinas
          </p>
          <p class="text-xl text-blue-900 font-semibold">
            Te recordamos que puedes visitarnos en <a class="text-xl font-bold underline" href="https://www.google.com/maps/dir//Ferreteria+Industrial+Procorex+S.A.,+Guayaquil+090606/@-2.1268001,-79.929434,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x902d72a4bae55287:0xc6ac4af353505699!2m2!1d-79.929548!2d-2.1256179" target="_blank">Nuestras oficinas</a>
          </p>
          <p class="text-gray-800 font-medium text-lg">
            Escríbenos a <span class="text-blue-900 font-semibold text-lg">
              administracion@procorex.ec
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        name: "facebook",
        link: "https://www.facebook.com/procorexsa"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/procorex/"
      },
      {
        name: "whatsApp",
        link: "https://www.whatsapp.com/catalog/593996525883/?app_absent=0"
      },
      {
        name: "linkedIn",
        link: "https://www.linkedin.com/company/procorex/"
      }
    ]
  })
}
</script>