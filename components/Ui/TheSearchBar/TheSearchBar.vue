<template>
  <div
    class="search-bar bg-gray-1 rounded-md px-12 py-8 flex items-center justify-between"
  >
    <div>
      <span class="text-main font-normal text-black-1 font-roboto pr-7">Search by release date:</span>
      <input
        type="text"
        class="border border-gray-9 h-8 font-roboto text-main font-normal focus:outline-none focus:border-blue-1 px-1"
      >
    </div>
    <VButton class="bg-blue-1">
      <span class="text-white-1 font-roboto">Search</span>
    </VButton>
  </div>
</template>

<script>
import VButton from '~/components/Element/VButton/VButton.vue'
export default {
  name: 'TheSearchBar',
  components: { VButton }
}
</script>
