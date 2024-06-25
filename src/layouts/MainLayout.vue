<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header>
        <q-toolbar>
          <q-toolbar-title>
            Menu Builder
          </q-toolbar-title>
          <q-btn
            label="Export"
            color="secondary"
            class="q-mx-xs"
            @click="store.exportTree"
          ></q-btn>
          <q-btn
            label="Import"
            color="secondary"
            class="q-mx-xs"
            @click="store.importTree"
          ></q-btn>
        </q-toolbar>
      </q-header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  // store
  import { useStore } from "stores/store";
  const store = useStore();
</script>
