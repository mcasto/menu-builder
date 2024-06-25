<template>
  <q-list dense dark class="bg-dark">
    <template v-for="item in menuItems" :key="item.id">
      <q-item clickable @click="onItemClick(item)">
        <q-item-section side>
          <q-icon
            v-if="item?.children?.length"
            :name="expanded[item.id] ? 'chevron_right' : 'chevron_left'"
            @click.stop="expanded[item.id] = !expanded[item.id]"
          >
            <q-menu anchor="center left" self="top right">
              <menu-component :menu-items="item.children"></menu-component>
            </q-menu>
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script setup>
  // setup
  import { ref } from "vue";

  // props
  const props = defineProps({
    menuItems: {
      type: Array,
      required: true,
    },
  });

  // variables
  const expanded = ref([]);

  // methods
  const onItemClick = (item) => {
    if (item.path) {
      console.log("Navigating to:", item.path);
    }
  };
</script>
