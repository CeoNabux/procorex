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
                class="w-full bg-transparent active:outline-none"
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
                class="w-full bg-transparent active:outline-none"
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
              class="w-full bg-transparent active:outline-none"
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
              class="w-full bg-transparent active:outline-none"
              placeholder="La pagina web me ayudo a encontrar la mejor herramienta para mi trabajo"
            />
          </div>
        </div>
        <w-full class="flex justify-center items-center mt-8">
          <p-button
            name="Enviar mensaje"
            class="bg-yellow-600 h-10 text-white"
          />
        </w-full>
      </div>
    </form>
  </div>
</template>
