<template>
  <div
    class="search-bar bg-gray-1 rounded-md px-12 py-8 flex items-center justify-between"
  >
    <div class="flex items-center">
      <span class="text-main font-normal text-black-1 font-roboto pr-7">Search by release date:</span>
      <date-range-picker
        ref="picker"
        v-model="dateRange"
        opens="center"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
        show-dropdowns
        auto-apply
        linked-calendars
        @update="updateValues"
      />
    </div>
    <ElementVButton class="bg-blue-1">
      <span class="text-white-1 font-roboto">Search</span>
    </ElementVButton>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
// you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'TheSearchBar',
  components: { DateRangePicker },
  data () {
    return {
      opens: 'center',
      dateRange: {
        startDate: '2019-12-10',
        endDate: '2019-12-20'
      }
    }
  },
  methods: {
    updateValues (values) {
      // TODO need to filter by date
      const formatStart = Intl.DateTimeFormat('en-US').format(values.startDate)
      const formatEnd = Intl.DateTimeFormat('en-US').format(values.endDate)
      console.log({ formatStart })
      console.log({ formatEnd })
    }
  }
}
</script>
