import { useStore } from "stores/store";
export default () => {
  const store = useStore();

  window.api.invoke("import-tree").then((json) => {
    store.menu = json;
  });
};
