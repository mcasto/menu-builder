import { cloneDeep } from "lodash";
import { useStore } from "stores/store";
export default () => {
  const store = useStore();

  window.api.invoke("export-tree", cloneDeep(store.menu)).then(console.log);
};
