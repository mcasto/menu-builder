<template>
  <q-page>
    <div class="q-pa-md">
      <div class="flex justify-between">
        <q-btn label="Add Menu Item" @click="addItem" color="secondary">
        </q-btn>
        <q-btn
          label="Clear Menu"
          @click="store.menu = []"
          color="warning"
          class="text-black"
        ></q-btn>
      </div>
      <q-toolbar class="flex justify-end">
        <q-btn label="Menu" color="primary">
          <q-menu>
            <menu-component :menu-items="store.menu"></menu-component> </q-menu
        ></q-btn>
      </q-toolbar>

      <div class="q-mt-md">
        <q-tree
          :nodes="store.menu"
          node-key="id"
          default-expand-all
          ref="menuTree"
        >
          <template #default-header="{node}">
            <div class="cursor-pointer" @click.stop>
              <div v-html="node.label"></div>

              <q-menu v-model="menus[node.id]">
                <div class="q-px-sm">
                  <q-input
                    type="text"
                    label="Label"
                    v-model="node.label"
                    dense
                    filled
                    class="q-my-xs"
                  ></q-input>
                  <q-input
                    type="text"
                    label="Path"
                    v-model="node.path"
                    dense
                    filled
                    class="q-my-xs"
                  ></q-input>
                </div>
                <q-separator class="q-my-sm"></q-separator>
                <div class="flex justify-between q-mb-xs">
                  <q-icon
                    name="delete"
                    class="cursor-pointer"
                    size="sm"
                    @click="store.deleteNode(node)"
                  ></q-icon>
                  <q-btn
                    label="Close"
                    color="secondary"
                    @click="delete menus[node.id]"
                  ></q-btn>
                </div>
              </q-menu>
            </div>

            <q-btn
              icon="add"
              round
              flat
              class="q-ml-xl"
              size="xs"
              @click.stop="addChild(node)"
            ></q-btn>
          </template>
        </q-tree>
      </div>
    </div>
  </q-page>
</template>

<script setup>
  // setup
  import { ref } from "vue";
  import { remove, uniqueId } from "lodash";
  import { uid } from "quasar";

  // store
  import { useStore } from "stores/store";
  const store = useStore();

  // components
  import MenuComponent from "components/MenuComponent.vue";

  // refs
  const menuTree = ref(null);

  // variables
  const menus = ref({});

  // methods
  const addChild = (node) => {
    node.children.push({
      id: uid(),
      label: `Child${uniqueId()}`,
      path: "",
      children: [],
    });
    menuTree.value.expandAll();
  };

  const addItem = () => {
    const item = {
      id: uid(),
      label: `Item${uniqueId()}`,
      path: "",
      children: [],
    };
    store.menu.push(item);
  };
</script>
