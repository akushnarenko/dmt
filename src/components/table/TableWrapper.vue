<template>
    <div :class="{ 'ml-[340px]': isSidebarOpen }">
        <TopMenu :users="users" @updateUsers="setFilteredUsers" />
        <MainTable @updateUsers="fetchUsers" :users="filteredUsers" />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { TopMenu } from '../top-menu'
import MainTable from './MainTable.vue'

defineProps({
    isSidebarOpen: {
        type: Boolean,
        default: false,
    },
})

const users = ref([])
const filteredUsers = ref([])

function fetchUsers(val) {
    users.value = val
    filteredUsers.value = users.value
}

function setFilteredUsers(newUsers) {
    filteredUsers.value = newUsers
}
</script>
