<template>
    <aside class="border-r-[0.6px] border-blue1" :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="flex items-center justify-between px-7">
            <div class="flex items-center gap-[6.23px]">
                <img width="26.17" height="26.17" src="../assets/commonIcons/logo.png" alt="" />
                <h1 class="text-style-2 text-size-10 text-white1">Dashdark X</h1>
            </div>
            <button class="flex gap-[2.5px]" @click="$emit('toggle')">
                <img src="../../src/assets/commonIcons/arrow-d.png" class="rotate-90" alt="" />
                <img src="../../src/assets/commonIcons/arrow-d.png" class="-rotate-90" alt="" />
            </button>
        </div>

        <div class="relative mt-[42px] px-7">
            <span class="absolute w-[13.33px] top-[13px] left-[42px] h-[13.33px] z-10">
                <img src="../assets/commonIcons/searchIcon.png" alt="" />
            </span>
            <input type="text" placeholder="Search for..." class="input input-view-1" />
        </div>

        <div class="menu px-7 pt-[29.5px] pb-[21px] border-b-[1px] border-white1 border-opacity-20">
            <ul>
                <li class="flex flex-col">
                    <div class="flex items-center justify-between h-[42px]">
                        <div class="flex items-center gap-1.5">
                            <img width="14" height="14" src="../assets/sidebar/dashboard.png" alt="" />
                            <span class="text-style-2 text-size-6 text-pink1">Dashboard</span>
                        </div>
                        <img width="6" height="3" src="../../src/assets/commonIcons/arrow-d.png" alt="" />
                    </div>

                    <ul class="nested-menu flex flex-col mt-2">
                        <li class="nested-li">
                            <span class="text-style-2 text-size-6 text-[#AEB9E1]"> All pages </span>
                        </li>
                        <li class="nested-li bg-black2 rounded-[4px]">
                            <span class="text-style-2 text-size-6 text-[#AEB9E1]"> Reports </span>
                        </li>
                        <li class="nested-li">
                            <span class="text-style-2 text-size-6 text-[#AEB9E1]"> Products </span>
                        </li>
                        <li class="nested-li">
                            <span class="text-style-2 text-size-6 text-[#AEB9E1]"> Task </span>
                        </li>
                    </ul>
                </li>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/features.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Features</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Users</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/pricing.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Pricing</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/integrations.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Integrations</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
            </ul>
        </div>

        <div class="px-7 pt-[21px]">
            <ul>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/settings.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Settings</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
                <li class="flex justify-between h-[42px] items-center">
                    <div class="flex items-center gap-1.5">
                        <img width="14" height="14" src="../assets/sidebar/templates.png" alt="" />
                        <span class="text-style-2 text-size-6 text-gray2">Templates</span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90"
                    />
                </li>
                <li class="flex h-[32px] mt-[21px] items-center">
                    <div class="avatar-container w-[28px] h-[28px] bg-pink1 overflow-hidden rounded-full">
                        <img src="../assets/avatars/avatar1.png" alt="" />
                    </div>
                    <div class="flex flex-col ml-2">
                        <span class="text-style-1 text-size-8 text-white1"> John Carter </span>
                        <span class="text-style-2 text-size-8 text-gray2"> Account settings </span>
                    </div>
                    <img
                        width="6"
                        height="3"
                        src="../../src/assets/commonIcons/arrow-d.png"
                        alt=""
                        class="-rotate-90 ml-auto"
                    />
                </li>
            </ul>
        </div>

        <button class="flex justify-center items-center gap-2.5 ml-[29.5px] mt-16 w-[241px] h-[46px]">
            <span class="text-style-2 text-size-1 text-white1"> Get template </span>
            <img src="../assets/commonIcons/arrow-r.png" alt="" />
        </button>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    background-color: theme('colors.black1');
    box-shadow: 10px 10px 40px #0105114d;
    max-width: 300px;
    overflow: hidden;
    padding-top: 38.28px;
    padding-bottom: 270px;
    transition: 0.2s ease-in-out;
    z-index: 100;
}

aside > button {
    background: theme('colors.pink2');
}

.nested-li {
    @apply flex items-center w-[244px] h-[42px] py-[14px] pl-[14.25px];
}

.nested-li:nth-of-type(2) {
    @apply border-l-[3px] border-pink1;
}
</style>
