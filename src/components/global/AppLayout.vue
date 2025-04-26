<template>
  <div class="layout">
    <v-layout class="position-relative">
      <cart-drawer />
      <MenuDrawer />
      <v-main
        :style="{
          paddingTop:
            $route.name === 'check_out'
              ? '0px'
              : windowWidth <= 990
              ? '60px'
              : '150px',
        }"
      >
        <slot></slot>
      </v-main>
      <AppNav
        v-show="$route.name != 'check_out' && !showFixed && windowWidth > 990"
      />
      <ResponsiveNav
        v-show="windowWidth <= 990 && $route.name != 'check_out'"
      />
      <FixedNav
        v-show="$route.name != 'check_out' && !showFixed && windowWidth > 990"
      />
      <AppFooter v-show="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<!--Options API-->
<script>
import AppNav from "@/components/global/AppNav.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
import FixedNav from "@/components/global/FixedNav.vue";
import ResponsiveNav from "@/components/global/ResponsiveNav.vue";
import MenuDrawer from "@/components/global/MenuDrawer.vue";
export default {
  data: () => ({
    drawer: true,
    showFixed: false,
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      // console.log(this.windowWidth);
    };

    window.onscroll = () => {
      if (window.screenY >= 205) {
        this.showFixed = true;
      } else {
        this.showFixed = false;
      }
    };
  },
};
</script>
