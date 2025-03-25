<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img :src="product.thumbnail" class="w-100" alt="" />
          <v-tabs center-active height="220">
            <v-tab v-for="(img, i) in product.images" :key="i" class="mx-10">
              <img :src="img" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >({{ product.title }}) Sample - {{ product.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="product.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1" style="font-size: 13px; color: rgb(96, 96, 96)"
                >Stock: {{ product.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >{{ product.description }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Brand: {{ product.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Availability:
              {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ product.price }}</del> From
              <span style="font-weight: 900; font-size: 16px"
                >${{
                  Math.ceil(
                    product.price -
                      product.price * (product.discountPercentage / 100)
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
              <v-icon size="22">mdi-minus</v-icon>
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
                value="1"
              />
              <v-icon size="22">mdi-plus</v-icon>
            </div>
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
              >Add To Cart</v-btn
            >
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<!--Options API-->

<script>
export default {
  data: () => ({
    product: {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  }),
};
</script>
<style scoped lang="scss"></style>
