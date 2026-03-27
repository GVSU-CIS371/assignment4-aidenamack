import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    selectedBase: bases[0],
    creamers: creamers,
    selectedCreamer: creamers[0],
    syrups: syrups,
    selectedSyrup: syrups[0],
  }),

  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
