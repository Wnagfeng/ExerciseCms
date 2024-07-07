import { defineStore } from "pinia";
interface IHomeState {
  count: number;
}
const useHomeStore = defineStore("home", {
  state: (): IHomeState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

export default useHomeStore;
