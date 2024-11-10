<script setup>
import { ref } from 'vue'
import SidebarComponent from './components/SidebarComponent.vue'
import { TableWrapper } from './components/table'
const isSidebarOpen = ref(false)
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)
</script>

<template>
    <div class="main">
        <button class="absolute left-[28px] top-[45.56px] flex gap-[2.5px]" @click="toggleSidebar">
            <img src="../src/assets/commonIcons/arrow-d.png" class="rotate-90" alt="" />
            <img src="../src/assets/commonIcons/arrow-d.png" class="-rotate-90" alt="" />
        </button>

        <SidebarComponent v-if="isSidebarOpen" @toggle="isSidebarOpen = false" />
        <TableWrapper :is-sidebar-open="isSidebarOpen" />
    </div>
</template>

<style></style>
