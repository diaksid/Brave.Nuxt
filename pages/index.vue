<template lang="pug">
  v-container(
  fluid
  lazyload
  v-lazy:background-image="backgroundImage"
  )
    v-layout(
    column
    fill-height
    align-content-space-between
    )
      v-layout(
      row
      wrap
      )
        v-flex(
        xs12
        sm5
        )
          h1.duplet Храбров
            |
            small Антон Павлович
        v-flex(
        xs12
        sm7
        text-sm-right
        )
          a.phone(href='tel://+74955067844')
            v-icon phone
            |
            small +7 (495)
            |
            | 506-78-44
          a.map(
          href='http://clck.ru/9t43U'
          target='_blank'
          )
            v-icon place
            |
            | 117556, Москва, Чонгарский бульвар

      v-layout(
      row
      wrap
      align-end
      )
        v-flex(
        xs12
        sm6
        )
          blockquote.
            Любая информация, представленная на данном сайте, носит исключительно информационный характер и
            ни при каких условиях не является публичной офертой, определяемой положениями статьи 437&nbsp;ГК&nbsp;РФ.
        v-flex(
        xs12
        sm6
        text-sm-right
        )
          v-tooltip(
          top
          nudge-top="10"
          v-for="(page, i) in pages"
          :key="i"
          )
            v-btn(
            fab
            large
            slot="activator"
            :to="page.to"
            ): v-icon(v-text="page.icon")
            span(v-text="page.title")
</template>


<script>
  export default {
    data () {
      return {
        backgroundImage: require('~/assets/images/bg/__.jpg'),
        pages: [
          {
            to: '/rent',
            title: 'Аренда техники',
            icon: 'local_shipping'
          },
          {
            to: '/equipment',
            title: 'Поставка оборудования',
            icon: 'build'
          },
          {
            to: '/furniture',
            title: 'Производство мебели',
            icon: 'event_seat'
          },
          {
            to: '/carving',
            title: 'Резьба по дереву',
            icon: 'local_florist'
          }
        ]
      }
    }
  }
</script>


<style lang="stylus" scoped>
  @require '~vuetify/src/stylus/settings/_variables.styl'
  @require '~vuetify/src/stylus/settings/_colors.styl'

  .container
    height 100%
    &[lazy=loading]
      background-image: none !important
    &[lazy=error]
      background-size: 25vmin
    .theme--light &
      background: none !important
  h1
    margin-bottom 2rem
    font-size: 5rem
    font-weight: $font-weights.light
    letter-spacing: 2px
    text-transform: uppercase
    small
      font-size: 35%
      letter-spacing: 5px
      text-transform: none

  .phone
  .map
    display: block
    text-decoration: none
    &:hover
      color: $blue.darken-3
    .v-icon
      color: inherit

  .phone
    margin-bottom 1.5rem
    font-size: 4rem
    small
      font-size: 60%
    .v-icon
      vertical-align: baseline
      margin-right: .5rem
      font-size: 50%

  .map
    color: #aaaaaa
    font-size: 1.85rem
    font-weight: $font-weights.light
    .v-icon
      font-size: inherit

  blockquote
    color: #aaaaaa
    font-weight: $font-weights.light
    padding-left: 1.25 * $spacer
    border-left: 7px solid #cccccc

  @media $display-breakpoints.lg-and-down
    h1
    .phone
      font-size: 4.5rem

    .map
      font-size: 1.75rem

  @media $display-breakpoints.md-and-down
    h1
    .phone
      font-size: 3.5rem

    .map
      font-size: 1.5rem

  @media $display-breakpoints.sm-and-down
    h1
    .phone
      font-size: 2.5rem

    .map
      font-size: 1.25rem
</style>
