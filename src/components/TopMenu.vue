<template>
    <div class="w-full flex justify-between items-center">
        <search-bar :users="users" @updateUsers="value => $emit('update-users', value)" />
        <button class="btn-1 h-[30px] rounded-[4px] bg-pink1 mr-10 hover:bg-opacity-80 hover:scale-[1.05]">
            Add user
        </button>
    </div>
</template>

<script setup>
import SearchBar from "./SearchBar.vue"

defineProps({
    users: {
        type: Array,
        default: null
    }
})
</script>