<template lang="pug">
  v-container.pa-2(
  fluid
  grid-list-sm
  )
    v-layout(
    row
    wrap
    )
      v-flex(xs12 mb-2)
        .banner
          canvas.lazyload(
          :width="1440"
          :height="320"
          v-lazy:background-image="images[0].path"
          v-img="{src: images[0].path}"
          )
          h1.header(v-text="title")

      v-flex(
      xs12
      lg4
      )
        .banner
          canvas.lazyload(
          :width="720"
          :height="720"
          v-lazy:background-image="images[1].path"
          v-img="{src: images[1].path}"
          )
          h3.header.duplet(v-html="images[1].header")
          .actions
            v-spacer
            v-btn(icon): v-icon favorite
            v-btn(icon): v-icon bookmark
            v-btn(icon): v-icon share
      v-flex(
      xs12
      lg8
      )
        v-layout(
        row
        wrap
        )
          v-flex(
          xs12
          lg6
          )
            .banner
              canvas.lazyload(
              :width="720"
              :height="360 - gutter"
              v-lazy:background-image="images[2].path"
              v-img="{src: images[2].path}"
              )
              h3.header--mini.duplet(v-html="images[2].header")
              .actions
                v-spacer
                v-btn(icon): v-icon favorite
                v-btn(icon): v-icon bookmark
                v-btn(icon): v-icon share
          v-flex(
          xs12
          lg6
          )
            .banner
              canvas.lazyload(
              :width="720"
              :height="360 - gutter"
              v-lazy:background-image="images[3].path"
              v-img="{src: images[3].path}"
              )
              h3.header--mini.duplet(v-html="images[3].header")
              .actions
                v-spacer
                v-btn(icon): v-icon favorite
                v-btn(icon): v-icon bookmark
                v-btn(icon): v-icon share
          v-flex(
          xs12
          lg6
          )
            .banner
              canvas.lazyload(
              :width="720"
              :height="360 - gutter"
              v-lazy:background-image="images[4].path"
              v-img="{src: images[4].path}"
              )
              h3.header--mini.duplet(v-html="images[4].header")
              .actions
                v-spacer
                v-btn(icon): v-icon favorite
                v-btn(icon): v-icon bookmark
                v-btn(icon): v-icon share
          v-flex(
          xs12
          lg6
          )
            .banner
              canvas.lazyload(
              :width="720"
              :height="360 - gutter"
              v-lazy:background-image="images[5].path"
              v-img="{src: images[5].path}"
              )
              h3.header--mini.duplet(v-html="images[5].header")
              .actions
                v-spacer
                v-btn(icon): v-icon favorite
                v-btn(icon): v-icon bookmark
                v-btn(icon): v-icon share
</template>


<script>
  export default {
    head () {
      return {
        title: this.title,
      }
    },

    data () {
      return {
        gutter: 3,
        images: [
          {
            path: require('~/assets/media/equipment/00.jpg')
          },
          {
            path: require('~/assets/media/equipment/04.jpg'),
            header: 'ДОН 1500 <small>комбайн</small>'
          },
          {
            path: require('~/assets/media/equipment/01.jpg'),
            header: 'КАМАЗ <small>с манипулятором</small>'
          },
          {
            path: require('~/assets/media/equipment/02.jpg'),
            header: 'МТЗ 82 <small>трактор</small>'
          },
          {
            path: require('~/assets/media/equipment/03.jpg'),
            header: 'Ивановец <small>автокран 14 тонн</small>'
          },
          {
            path: require('~/assets/media/equipment/05.jpg'),
            header: 'Газель <small>цельнометаллическая</small>'
          }
        ],
        title: 'Аренда техники',
      }
    }
  }
</script>


<style lang="stylus" scoped>
  @require '~vuetify/src/stylus/settings/_variables.styl'
  @require '~vuetify/src/stylus/settings/_theme.styl'

  .lazyload
    display: block
    width: 100%
    height: auto

  .banner
    position: relative
    overflow: hidden
    border-radius: 4px
    h1
      opacity: .75
    h3
      color: $material-dark.icons.inactive
      font-weight: $font-weights.light
    .header
    .header--mini
      position: absolute
      top: 0
      padding: 1.5rem 1rem 0 3rem
      max-width: 100%
      font-size 3.5rem
    .header--mini
      font-size 3rem
    .actions
      display flex
      position: absolute
      bottom: 0
      padding: .5rem
      width: 100%
      opacity: .5
      background-color: rgba(0, 0, 0, .5)
      .v-icon
        color: $material-dark.icons.inactive
        &:hover
          color: $material-dark.icons.active
    &::before
      content ''
      position: absolute
      top: 0
      width: 100%
      height: 25%
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0, rgba(0, 0, 0, 0) 100%);
    &:hover
      h1
      .actions
        opacity: 1
      h3
        color: $material-dark.icons.active

  @media $display-breakpoints.md-and-down
    .flex
      margin-bottom: 1rem
    .lazyload
      height: 20rem
    .header
      font-size 3rem

  @media $display-breakpoints.sm-and-down
    .lazyload
      height: 16rem
    .header
    .header--mini
      font-size: 2.5rem !important
</style>
