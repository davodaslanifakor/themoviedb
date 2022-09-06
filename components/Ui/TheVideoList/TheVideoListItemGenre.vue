<template>
  <ul class="flex flex-wrap items-center h-8">
    <li
      v-for="(genre, index) in genres"
      :key="`genre-${index}`"
      class="flex items-center"
    >
      <span class="font-roboto text-xs font-normal text-gray-4 leading-3">
        {{ genre.name }}
      </span>
      <b
        v-if="index !== genres.length - 1"
        class="min-w[4px] max-h-[4px] mx-1 w-1 h-2 rounded-full bg-gray-4 inline-flex"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TheVideoItemGenre',
  props: {
    genres: {
      type: Array,
      default: () => []
    }
  }
}
</script>
