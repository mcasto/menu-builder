import { defineStore } from "pinia";
import { ref } from "vue";

// import actions
import deleteNode from "./actions/delete-node";
import exportTree from "./actions/export-tree";
import importTree from "./actions/import-tree";

export const useStore = defineStore("store", () => ({
  // state
  menu: [],

  // actions
  deleteNode,
  exportTree,
  importTree,
}));
