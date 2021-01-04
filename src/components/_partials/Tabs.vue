<template>
  <div>
    <nav class="bg-Cultured-900 pt-2 shadow-md rounded-t-xl px-5">
      <div class="-mb-px flex">
        <a v-for="tab in tabs"
        class="no-underline border-transparent uppercase tracking-wide font-bold text-xs py-3 px-2 rounded-t-md"
        :class=" tab.isActive ? 'border-t-2 border-l-2 border-r-2 border-solid border-gray-200 shadow-inner' : '' "
        :href="tab.href" @click="selectTab(tab)"
        :key="tab.name"
        >
          {{ tab.name }}
        </a>
      </div>
    </nav>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { tabs: [] }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.href === selectedTab.href)
      })
    }
  }
}
</script>
