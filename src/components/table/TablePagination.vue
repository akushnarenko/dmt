<template>
    <div class="flex justify-between">
        <span class="text-style-2 text-size-5 text-white1">
            {{ paginatedUsers.length ? 1 : 0 }}-{{ paginatedUsers.length }} of {{ users.length }}
        </span>

        <div class="pagination-controls flex items-center gap-[59px]">
            <div class="flex items-center gap-3">
                <span class="text-style-2 text-size-9 text-gray2"> Rows per page: </span>
                <div
                    class="dropdown flex items-center gap-[7px] h-[26px] bg-[#0A1330] border-[#0B1739] p-1.5 rounded-[4px]"
                >
                    <span class="text-style-2 text-size-8 text-gray4">10</span>
                    <img src="../../assets/commonIcons/arrow-d.png" alt="" />
                </div>
            </div>

            <div class="pagination-btns flex gap-[7px]">
                <button
                    class="h-[26px] w-[26px] bg-[#0A1330] border-[#0B1739] p-1.5 rounded-[4px]"
                    @click="prevPage"
                    :disabled="currentPage === 1"
                >
                    <img src="../../assets/commonIcons/arrow-r.png" alt="" />
                </button>
                <button
                    class="h-[26px] w-[26px] bg-[#0A1330] border-[#0B1739] p-1.5 rounded-[4px]"
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                >
                    <img src="../../assets/commonIcons/arrow-r.png" alt="" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    users: {
        type: Array,
        default: null,
    },
    totalPages: {
        type: Number,
        default: 1,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    paginatedUsers: {
        type: Array,
        deafult: null,
    },
})

const emit = defineEmits(['prev', 'next'])

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

function nextPage() {
    if (props.currentPage < props.totalPages) {
        emit('next')
    }
}

function prevPage() {
    if (props.currentPage > 1) {
        emit('prev')
    }
}
</script>
