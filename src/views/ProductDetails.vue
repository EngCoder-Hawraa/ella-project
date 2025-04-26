<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image, image"
          ></v-skeleton-loader>
          <v-tabs center-active height="220" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img :src="img" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-skeleton-loader
            v-if="loading"
            type="article, article, article"
          ></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >({{ singleProduct.title }}) Sample - {{ product.category }} For
              Sale</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1" style="font-size: 13px; color: rgb(96, 96, 96)"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >{{ singleProduct.description }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Brand: {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Availabilty:
              {{
                singleProduct.stock > 0 ? "In Stock" : "Out of Stock"
              }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> From
              <span style="font-weight: 900; font-size: 16px"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}</span
              >
            </v-card-text>
            <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
            <div
              class="counter px-1"
              style="
                border-radius: 30px;
                border: 1px solid rgb(201, 201, 201);
                width: fit-content;
              "
            >
              <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                style="
                  border: none;
                  outline: none;
                  width: 60px;
                  font-size: 13px;
                "
                class="text-center py-3"
                min="1"
                v-model="quantity"
              />
              <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
            </div>
            <v-card-text class="pl-0">
              Subtotal: ${{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-7 w-100 px-0">
              <v-btn
                variant="outlined"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  background-color: rgb(34, 34, 34);
                "
                class="w-75 text-white"
                density="compact"
                height="50"
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<!--Options API-->
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/components";
import { cartStore } from "@/stores/cart";

export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapState(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    product: {},
    btnLoading: false,
  }),
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.query.productId);
    this.loading = false;
  },
};
</script>

<style scoped lang="scss"></style>
