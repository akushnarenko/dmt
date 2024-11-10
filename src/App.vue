<script setup>

import { ref } from "vue";
import MainTable from "./components/MainTable.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import TopMenu from "./components/TopMenu.vue"

const isSidebarOpen = ref(false);

const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value

const users = ref([]);
const filteredUsers = ref([]);

function fetchUsers(val) {
  users.value = val;
  filteredUsers.value = users.value;
}

function setFilteredUsers(newUsers) {
  filteredUsers.value = newUsers;
}
</script>

<template>
  <div class="main">
    <button class="absolute left-[28px] top-[45.56px] flex gap-[2.5px]" @click="toggleSidebar">
      <img src="../src/assets/commonIcons/arrow-d.png" class="rotate-90" alt="">
      <img src="../src/assets/commonIcons/arrow-d.png" class="-rotate-90" alt="">
    </button>
    <TopMenu :users="users" @updateUsers="setFilteredUsers" />
    <SidebarComponent v-if="isSidebarOpen" @toggle="isSidebarOpen = false" />
    <MainTable @updateUsers="fetchUsers" :users="filteredUsers" />
  </div>
</template>

<style></style>
