<template>
  <div class="mt-16 w-full px-4">
    <h2 class="text-5xl font-bold text-blue-900 w-full mb-8">
      Contáctanos si tienes alguna pregunta
    </h2>
    <form action="" class="flex w-full justify-center item-center">
      <div class="w-full">
        <div class="flex flex-wrap justify-center items-center">
          <div class="w-full lg:w-1/2 pr-2">
            <label for="" class="font-light text-lg">
              Nombre
            </label>
            <div class="bg-gray-200 w-full rounded-lg shadow py-2 px-4">
              <input
                type="text"
                v-model="contactName"
                class="w-full bg-transparent focus:outline-none"
                placeholder="Luis"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <label for="" class="font-light text-lg">
              Apellido
            </label>
            <div class="bg-gray-200 w-full rounded-lg shadow py-2 px-4">
              <input
                type="text"
                v-model="contactLastname"
                class="w-full bg-transparent focus:outline-none"
                placeholder="Reyes"
              />
            </div>
          </div>
        </div>
        <div class="w-full mt-2">
          <label for="" class="font-light text-lg">
            Correo
          </label>
          <div class="bg-gray-200 w-full rounded-lg shadow py-2 px-4">
            <input
              type="text"
              v-model="contactMail"
              class="w-full bg-transparent focus:outline-none"
              placeholder="ejemplo@maverick.ec"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <label for="" class="font-light text-lg">
            Mensaje
          </label>
          <div class="bg-gray-200 w-full rounded-lg shadow py-2 px-4">
            <input
              type="text"
              v-model="message"
              class="w-full bg-transparent focus:outline-none"
              placeholder="La pagina web me ayudo a encontrar la mejor herramienta para mi trabajo"
            />
          </div>
        </div>
        <w-full class="flex justify-center items-center mt-8">
          <p-button
            name="Enviar mensaje"
            class="bg-yellow-600 h-10 text-white"
            @click.prevent="sendMail"
          />
        </w-full>
      </div>
    </form>
  </div>
</template>


<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactCard',
  data: () => ({
    contactName: '',
    contactLastname: '',
    message: '',
    contactMail: ''
  }),
  methods: {
    resetField() {
      (this.contactName = '')
      (this.contactLastname = '')
      (this.message = '')
      (this.contactMail = '')
    },

    async sendMail() {
      const params = {
        to_name: 'Procorex',
        from_name: this.contactName,
        from_lastname: this.contactLastname,
        reply_to: this.contactMail,
        message: this.message
      }
      try {
        await emailjs.send(
          'service_obc1bzq',
          'template_s73jya8',
          params,
          'user_Gz0RsCU9scvcA7DONJBoF'
        )
        alert('email enviado')
        this.resetField
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
