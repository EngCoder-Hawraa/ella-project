<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon
            size="75"
            color="green"
            style="
              background: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(93, 93, 93)"
        >
          Order Placed Successfully!
        </v-card-title>
        <v-card-text style="font-size: 17px; color: rgb(134, 134, 134)"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          culpa eos esse in incidunt magni obcaecati officiis pariatur possimus,
          praesentium quasi reprehenderit tempore unde veniam voluptate. Autem
          dolores nobis voluptate!</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData"
            >Got it!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<!--Options API-->
<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        // أغلقنا النافذة، ننتظر انتهاء التحول قبل التوجيه
        setTimeout(() => {
          this.$emit("close_popup");
          this.$router.push({ name: "home" });
        }, 400); // أطول من مدة transition الافتراضية لـ v-dialog
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false; // فقط نغلق النافذة، والباقي يحدث في watch
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
<style scoped lang="scss"></style>
