<template>
  <div class="title-top bg-gray-1 rounded-md px-12 py-8 flex items-center">
    <ElementVButton tag="nuxt-link" :to="{name:'index'}" class="bg-blue-1">
      <div class="flex items-center">
        <ElementVIconBack />
        <span class="text-white-1 font-roboto pl-1.5">Back</span>
      </div>
    </ElementVButton>
    <div class="ml-16">
      <h1 class="font-roboto text-black-1  text-lg font-bold">
        {{ title }}
      </h1>
      <h2 class="font-roboto text-black-1 text-lg font-normal">
        {{ preTitle }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheVideoDetailTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    preTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
