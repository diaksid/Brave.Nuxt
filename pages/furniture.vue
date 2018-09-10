<template lang="pug">
  v-container
    v-layout(row)
      header
        h1.display-3.mb-5(v-text="title")
        hrabrovo-logo
</template>


<script>
  import HrabrovoLogo from '~/components/HrabrovoLogo'

  export default {
    components: {
      HrabrovoLogo
    },

    head () {
      return {
        title: this.title,
      }
    },

    data () {
      return {
        title: 'Производство мебели'
      }
    }
  }
</script>
