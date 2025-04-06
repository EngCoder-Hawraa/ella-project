<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <!-- الصورة الرئيسية تتغير عند اختيار تبويب صورة مصغرة -->
          <img
            :src="product[selectedProductIndex].images[selectedImageIndex]"
            class="w-100"
            alt="Product Image"
          />

          <!-- v-tabs لعرض الصور المصغرة -->
          <v-tabs center-active height="220" v-model="selectedImageIndex" grow>
            <v-tab
              v-for="(img, i) in product[selectedProductIndex].images"
              :key="i"
              class="mx-10"
            >
              <img
                :src="img"
                width="100"
                height="200"
                @click="selectedImageIndex = i"
              />
            </v-tab>
          </v-tabs>
        </v-col>

        <v-col cols="5" class="pt-0 pl-6">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
            >
              ({{ product[selectedProductIndex].title }}) Sample -
              {{ product[selectedProductIndex].category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="product[selectedProductIndex].rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span
                class="mt-1"
                style="font-size: 13px; color: rgb(96, 96, 96)"
              >
                Stock: {{ product[selectedProductIndex].stock }}
              </span>
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
            >
              {{ product[selectedProductIndex].description }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>${{ product[selectedProductIndex].price }}</del> From
              <span style="font-weight: 900; font-size: 16px">
                ${{
                  Math.ceil(
                    product[selectedProductIndex].price -
                      product[selectedProductIndex].price *
                        (product[selectedProductIndex].discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
          </v-card>
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
            >
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProductIndex: 0, // المنتج النشط
      selectedImageIndex: 0, // الصورة المصغرة المختارة
      product: [
        {
          id: 1,
          title: "Essence Mascara Lash Princess",
          description:
            "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
          category: "beauty",
          price: 9.99,
          discountPercentage: 7.17,
          rating: 4.94,
          stock: 5,
          brand: "Essence",
          images: [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/2.png",
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/3.png",
          ],
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss"></style>
