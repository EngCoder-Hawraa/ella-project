import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    fragrances: [],
    furniture: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          // console.log(res.data.products);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.furniture = res.data.products.filter(
            (el) => el.category === "furniture"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        // .then((res) => console.log(res.data));
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        // .then((res) => console.log(res.data));
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
