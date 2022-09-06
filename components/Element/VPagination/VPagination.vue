<template>
  <div class="pagination flex w-full items-center flex-col">
    <div class="flex space-x-[30px] divide-x divide-solid divide-gray-8">
      <div
        class="font-roboto cursor-pointer text-base font-bold"
        :class="[!pervtDeactive ? 'text-blue-2' : 'text-black-3']"
        @click="prev"
      >
        Previous Page
      </div>
      <div
        class="font-roboto cursor-pointer text-base font-bold pl-[30px]"
        :class="[!nextDeactive ? 'text-blue-2' : 'text-black-3']"
        @click="next"
      >
        Next Page
      </div>
    </div>
    <span class="font-roboto text-base font-normal text-gray-7 mt-3.5">
      Showing results {{ pagination.page }}-{{ pagination.total_pages }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'VPagination',
  props: {
    pagination: {
      default: () => {
      },
      type: Object
    }
  },
  computed: {
    nextDeactive () {
      return this.pagination.page === this.pagination.total_pages
    },
    pervtDeactive () {
      return this.pagination.page === 1
    }
  },
  methods: {
    prev () {
      let thisPage = this.pagination.page
      this.$emit('change', (thisPage -= 1))
    },
    next () {
      let thisPage = this.pagination.page
      this.$emit('change', (thisPage += 1))
    }
  }
}
</script>
