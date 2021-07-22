<template>
  <div class="max-w-screen-xl w-full mx-auto">
    <div class="flex flex-wrap px-4 pt-6 w-full">
      <div class="flex flex-col w-full lg:w-1/2">
        <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
          <p class="text-blue-900 font-semibold text-4xl">
            ¿Cómo podemos ayudarte?
          </p>
          <p class="text-gray-600 font-light text-lg my-4">
            Estamos a gusto de ayudarte
          </p>
          <p class="text-blue-900 font-bold text-xl mb-14">
            2266450
          </p>
          <p class="text-gray-800 font-medium text-lg">
            Lunes - Viernes: 8:00-18:00 <br />
            Sábado: 8:00-15:00
          </p>
        </div>
        <div class="w-full lg:w-1/2">
          <p class="text-blue-900 font-light text-xl mb-16">
            Encuéntranos en nuestras redes
          </p>
          <div
            class="flex flex-col lg:flex-row justify-between items-center py-4 pr-8"
          >
            <a
              :href="item.link"
              v-for="(item, i) in social"
              :key="i"
              class="w-7 h-7 focus:outline-none mb-8"
            >
              <p-icon :name="item.name" class="text-blue-900" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex justify-center items-center">
        <the-map />
      </div>
    </div>
    <div class="w-full flex justify-center place-items-center">
      <contact-card />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/cards/ContactCard.vue"

export default {
  components: {
    ContactCard
  },
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
