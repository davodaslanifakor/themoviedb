<template>
  <div class="flex flex-col space-y-3.5 w-full">
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Budget
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.budget }}
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Revenue
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.revenue }}
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Release Date
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.releaseDate }}
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Runtime
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.runtime }}
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Score
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.score.average }} ({{ generalInfo.score.count }} vots)
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Genres
      </span>
      <span class="font-roboto text-black-4  text-sm font-normal">
        {{ generalInfo.genres }}
      </span>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        IMDB Link
      </span>
      <a :href="generalInfo.imdbLink" class="font-roboto text-blue-1  text-sm font-normal underline">
        Link
      </a>
    </div>
    <div class="flex justify-between w-full">
      <span class="font-roboto text-black-4  text-main font-bold capitalize">
        Homepage Link
      </span>
      <a :href="generalInfo.homePageLink" class="font-roboto text-blue-1  text-sm font-normal underline">
        Link
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheVideoDetailInformation',
  props: {
    generalInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
