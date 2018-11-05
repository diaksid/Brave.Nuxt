<template lang="pug">
  v-app(:dark="$store.state.themeDark")
    v-navigation-drawer.elevation-8(
    permanent
    fixed
    :mini-variant="$store.state.drawerAppMini"
    )
      v-list
        v-list-tile.mb-1(
        @click.stop="$store.commit('toggleDrawerAppMini')"
        ): v-list-tile-action: v-icon(:light="$store.state.drawerAppMini") menu
        v-list-tile(
        router
        exact
        ripple
        @click.stop="$store.commit('setDrawerAppMini', true)"
        v-for="(page, i) in pages"
        :key="i"
        :to="page.to"
        )
          v-tooltip(
          right
          :z-index="$store.state.drawerAppMini && 99 || -1"
          )
            v-list-tile-action(slot="activator"): v-icon(v-text="page.icon")
            span(v-text="page.title")
          v-list-tile-content: v-list-tile-title {{ page.title }}
      v-list.v-list--bottom
        v-list-tile(
        target="_blank"
        href="//daks.pro"
        ): v-list-tile-action: v-icon(light) laptop_windows

    v-content: nuxt

    v-footer(:style="`padding-left:${$vuetify.application.left}px`")
      v-btn.my-0.mx-3(
      icon
      flat
      small
      @click.stop="$store.commit('toggleThemeDark')"
      ): v-icon invert_colors
      v-tooltip.ml-auto(left)
        v-btn.my-0.mx-3(
        icon
        flat
        small
        slot="activator"
        target="_blank"
        href="https://metrika.yandex.ru/dashboard?id=50140945"
        ): v-icon signal_cellular_alt
        span Yandex.Metrika
      span.px-3 &copy; 2018

    pro-auth
    pro-goto-top
    pro-notify
</template>


<script>
  import ProAuth from '~/components/ProAuth'
  import ProGotoTop from '~/components/ProGotoTop'
  import ProNotify from '~/components/ProNotify'

  export default {
    components: {
      ProAuth,
      ProGotoTop,
      ProNotify
    },

    beforeMount () {
      this.$vuetify.application.left = 80
    },

    data () {
      return {
        pages: [
          {
            to: '/',
            title: 'Главная',
            icon: 'apps'
          },
          /*
          {
            to: '/rent',
            title: 'Аренда техники',
            icon: 'local_shipping'
          },
          */
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
          },
          {
            to: '/contact',
            title: 'Контакты',
            icon: 'mail'
          }
        ]
      }
    }
  }
</script>


<style lang="stylus">
  @require '../node_modules/vuetify/src/stylus/settings/_variables.styl'

  .v-list--bottom
    position: absolute
    bottom: 0
    padding: 0
    .v-list__tile
      height: $footer-height;

  .v-footer .v-btn
    opacity .7
    &:hover
      opacity 1

  .theme--light
    .v-content
      background: url('~/assets/images/bg/white.linen.png') repeat transparent
</style>
