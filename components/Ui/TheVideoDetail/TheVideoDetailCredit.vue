<template>
  <div>
    <h3 class="font-roboto text-black-1  text-lg font-bold mb-3">
      Credit:
    </h3>
    <div class="font-roboto text-black-2  text-sm font-normal">
      {{ _credits }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheVideoDetailCredit',
  props: {
    credits: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    _credits () {
      if (!this.credits.length) { return '' }
      return this.credits.map(({ name }) => name).join(',')
    }
  }
}
</script>
