import { Notify } from "quasar";
import { useStore } from "stores/store";

export default (node) => {
  const store = useStore();

  Notify.create({
    type: "warning",
    message: `Are you sure you want to delete the ${node.label} node?`,
    actions: [
      {
        label: "No",
      },
      {
        label: "Yes",
        handler: () => {
          function traverseAndRemove(nodes) {
            for (let i = 0; i < nodes.length; i++) {
              if (nodes[i].id === node.id) {
                nodes.splice(i, 1);
                return true; // Node found and removed
              } else if (nodes[i].children && nodes[i].children.length > 0) {
                const found = traverseAndRemove(nodes[i].children);
                if (found) {
                  return true; // Stop further traversal once the node is found
                }
              }
            }
            return false; // Node not found in this branch
          }

          traverseAndRemove(store.menu);
        },
      },
    ],
  });
};
