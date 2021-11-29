<template>
  <div class="w-full bg-blue-700 mt-16 py-16 px-12">
    <div
      class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center"
    >
      <figure
        class="w-full lg:w-2/5 flex justify-center items-center mb-16 lg:mb-0"
      >
        <img
          src="@/assets/logos/procorex-imagotipo.png"
          alt="logo-procorex"
          class="w-1/5 lg:w-2/5 logo-image"
        />
      </figure>
      <div class="w-full lg:w-3/5">
        <div class="w-full mb-12 lg:mb-0">
          <p class="text-yellow-500 font-bebas font-light text-3xl">
            ¿Necesitas ayuda?
          </p>
        </div>
        <div class="w-full flex justify-between items-start flex-wrap">
          <div
            class="w-full lg:w-2/3 flex justify-between items-start flex-wrap"
          >
            <div class="w-full md:w-1/2">
              <div class="w-full">
                <p class="text-yellow-500 font-light font-bebas text-lg">
                  Líneas telefónicas:
                </p>
                <p class="text-white font-light font-bebas text-lg">
                  2266450 - 2262416
                </p>
                <p class="text-white font-light font-bebas text-lg">
                  099 652 5883
                </p>
              </div>
              <div class="w-full mt-3">
                <p class="text-yellow-500 font-light font-bebas text-lg">
                  Escríbenos a:
                </p>
                <p class="text-white font-light font-bebas text-lg">
                  administracion@procorex.ec
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full">
                <p class="text-yellow-500 font-light font-bebas text-lg">
                  Horarios de atención:
                </p>
                <p class="text-white font-light font-bebas text-lg">
                  Lunes - Viernes: 8:00 AM - 18:00 PM
                </p>
                <p class="text-white font-light font-bebas text-lg">
                  Sábado: 8:00 AM - 15:00 PM
                </p>
              </div>
              <div class="w-full mt-3">
                <p class="text-white font-light font-bebas text-lg">
                  Te recordamos que puedes visitarnos en nuestras oficinas
                </p>
                <a
                  class="text-xl font-bold underline text-yellow-500 font-bebas"
                  href="https://www.google.com/maps/dir//Ferreteria+Industrial+Procorex+S.A.,+Guayaquil+090606/@-2.1268001,-79.929434,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x902d72a4bae55287:0xc6ac4af353505699!2m2!1d-79.929548!2d-2.1256179"
                  target="_blank"
                  >Nuestras oficinas</a
                >
              </div>
            </div>
          </div>
          <div
            class="w-full lg:w-1/3 mt-4 lg:mt-0 md:pl-2"
          >
            <p class="text-yellow-500 font-bebas text-2xl">
              Síguenos en nuestras redes
            </p>
            <div
              class="flex flex-col md:flex-row md:justify-start items-center md:items-center py-4 pr-8"
            >
              <a
                :href="item.link"
                v-for="(item, i) in social"
                :key="i"
                class="w-7 h-7 focus:outline-none mb-6 lg:mb-0 mr-0 md:mr-2"
              >
                <p-icon :name="item.name" class="text-white" />
              </a>
            </div>
          </div>
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
};
</script>

<style scoped>
.logo-image {
  filter: grayscale(100%) saturate(100%) invert(100%);
}
</style>