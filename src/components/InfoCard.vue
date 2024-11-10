<template>
    <div
        v-for="card in cards"
        :key="card.id"
        class="w-[243px] border-[0.6px] rounded-lg border-solid border-[#343B4F] gap-3 h-[80px] flex bg-blue1 px-[20.28px] py-5"
    >
        <div
            class="w-[39.82px] h-10 rounded-[80px] bg-opacity-20 flex justify-center items-center"
            :class="getBgColor(card.bg)"
        >
            <img :src="card.imgSrc" class="z-10 max-w-[17px] max-h-[16px]" alt="" />
        </div>
        <div class="flex flex-col">
            <span class="text-style-1 text-size-1 text-white1">
                {{ card.title }}
            </span>
            <span class="text-style-1 text-size-1 text-gray2">
                {{ card.quantity }}
            </span>
        </div>
        <div class="flex flex-col item-center justify-center gap-1 ml-auto">
            <span class="w-[2px] h-[2px] bg-white1 rounded-[50%]"></span>
            <span class="w-[2px] h-[2px] bg-white1 rounded-[50%]"></span>
            <span class="w-[2px] h-[2px] bg-white1 rounded-[50%]"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
    {
        id: 1,
        bg: 'pink1',
        title: 'Total Users',
        imgSrc: new URL('@/assets/commonIcons/total_users.png', import.meta.url),
        quantity: 250,
    },
    {
        id: 2,
        bg: 'orange1',
        title: 'New Users',
        imgSrc: new URL('@/assets/commonIcons/new_user.png', import.meta.url),
        quantity: 15,
    },
    {
        id: 3,
        bg: 'green1',
        title: 'Top Users',
        imgSrc: new URL('@/assets/commonIcons/top_users.png', import.meta.url),
        quantity: 200,
    },
    {
        id: 4,
        bg: 'blue4',
        title: 'Other Users',
        imgSrc: new URL('@/assets/commonIcons/other_users.png', import.meta.url),
        quantity: 35,
    },
])

const getBgColor = (bgColor) => {
    switch (bgColor) {
        case 'pink1':
            return 'bg-pink1'
        case 'orange1':
            return 'bg-orange1'
        case 'green1':
            return 'bg-green1'
        case 'blue4':
            return 'bg-blue4'
    }
}
</script>
