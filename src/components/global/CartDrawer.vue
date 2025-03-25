<template>
  <div class="drawer">
    <v-navigation-drawer location="right" temporary v-model="drawer">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem
        cumque delectus doloremque fuga ipsam iure mollitia odio officia optio
        perferendis praesentium quam recusandae repellendus sequi vero voluptas,
        voluptatibus voluptatum.
      </p>
    </v-navigation-drawer>
  </div>
</template>
<!--Options API-->
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
<style scoped lang="scss"></style>
