import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      let exists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === item.id) {
          this.cartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cartItems.push({ ...item }); // deep copy
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
      console.log(this.cartItems);
    },
    getCartItems() {
      const items = localStorage.getItem("cart-items");
      if (items) {
        this.cartItems = JSON.parse(items);
      }
      console.log(this.cartItems);
    },
    deleteItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    setToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    resetItems() {
      this.cartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});
