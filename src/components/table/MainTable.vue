<template>
    <UsersInfoBlock />
    <div class="w-full flex flex-col border-[0.6px] border-[#343B4F] bg-[#0e1739] rounded-lg shadow-lg">
        <div
            class="flex justify-between border-b-[0.6px] border-[#343B4F] items-center pl-[35px] pr-[53px] pt-[28.06px] pb-[23px]"
        >
            <h2 class="text-style-1 text-size-1 text-white1">All Users</h2>
            <span class="text-style-2 text-size-6 text-gray2">
                <strong class="text-pink1">1-10</strong> of {{ users.length }}
            </span>
        </div>

        <table class="text-left text-sm text-gray-300">
            <thead class="bg-[#131b3a]">
                <tr>
                    <th v-for="item in tableHeaderData" :key="item.id" class="pt-[16.03px] pb-[15.83px] w-1/5">
                        <div class="flex items-center">
                            <div v-if="item.id === 1" class="ml-[35px] mr-[19px]">
                                <input
                                    class="custom-checkbox"
                                    id="all-users"
                                    name="main-checkbox"
                                    :indeterminate.prop="!allSelected(users) && isSomeSelected(users)"
                                    :checked="allSelected(users)"
                                    @change="isEveryFieldChecked(users)"
                                    type="checkbox"
                                />
                                <label class="custom-checkbox-label" for="all-users"></label>
                            </div>
                            <img class="mr-[4px] max-h-[10px] max-w-[10px]" :src="item.imgSrc" :alt="item.title" />
                            <span
                                class="text-style-2 text-size-7 text-white1 cursor-pointer"
                                @click="sortByField(item.slug)"
                            >
                                {{ item.title }}
                            </span>
                            <div class="flex flex-col pl-1.5 gap-0.5">
                                <button>
                                    <img src="../assets/commonIcons/arrow-d.png" class="rotate-180" alt="" />
                                </button>
                                <button>
                                    <img src="../assets/commonIcons/arrow-d.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in paginatedUsers" :key="user.id">
                    <td class="pt-[16.6px] pb-[15.64px] pl-[35px] pr-[53px]">
                        <div class="flex">
                            <input
                                class="custom-checkbox mr-[19.14px]"
                                :id="`checkbox-${user.id}`"
                                :name="`checkbox-${user.id}`"
                                type="checkbox"
                                :checked="checkedFields.some((el) => el.id === user.id)"
                                @change="checkboxHandler(user)"
                            />
                            <label class="custom-checkbox-label mr-[19.14px]" :for="`checkbox-${user.id}`"></label>
                            <div class="avatar-container w-[28px] h-[28px] bg-pink1 overflow-hidden rounded-full">
                                <img :src="user.avatar" alt="" />
                            </div>
                            <div class="flex flex-col ml-2">
                                <span class="text-style-1 text-size-8 text-white1">
                                    {{ user.name }}
                                </span>
                                <span class="text-style-2 text-size-8 text-gray2">
                                    {{ user.email }}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="text-style-2 text-size-8 text-gray2">
                            {{ user.phone }}
                        </span>
                    </td>
                    <td>
                        <span class="text-style-2 text-size-8 text-gray2">
                            {{ user.location }}
                        </span>
                    </td>

                    <td>
                        <div class="flex items-center gap-2">
                            <div
                                class="w-5 h-5 flex justify-center overflow-hidden items-center rounded-[28.5px] border-[0.6px] border-[#E9EAF3]"
                                :class="getCompanyBgColor(user.company)"
                            >
                                <img :src="user.companyImg" alt="" class="object-center" />
                            </div>
                            <span class="text-style-2 text-size-8 text-gray2">
                                {{ user.company }}
                            </span>
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center gap-[74px]">
                            <div
                                class="flex items-center"
                                :class="[user.status === 'Online' ? 'status-container-1' : 'status-container-2']"
                            >
                                <span
                                    class="text-style-2 text-size-8 status-text"
                                    :class="[user.status === 'Online' ? 'text-color-1' : 'text-color-2']"
                                >
                                    {{ user.status }}
                                </span>
                            </div>
                            <div class="flex gap-[8.38px]">
                                <button class="max-w-3 max-h-3">
                                    <img src="@/assets/commonIcons/pencil.png" alt="" />
                                </button>
                                <button class="max-w-3 max-h-3">
                                    <img src="@/assets/commonIcons/trash.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <TablePagination
        class="w-full pt-[23.36px] pb-[124.64px]"
        :total-pages="totalPages"
        :current-page="currentPage"
        :users="users"
        :paginated-users="paginatedUsers"
        @next="currentPage += 1"
        @prev="currentPage -= 1"
    />
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'

import { useGetUsers } from '../../utils/useGetUsers'
import { useCheckboxHandler } from '../../utils/useCheckboxHandler'
import { UsersInfoBlock } from '../users-info'
import TablePagination from './TablePagination.vue'

const emit = defineEmits(['updateUsers'])
const props = defineProps({
    users: {
        type: Array,
        default: null,
    },
})
const { fetchUsers } = useGetUsers()

const { isChecked, isEveryFieldChecked, checkedFields, allSelected, isSomeSelected, checkboxHandler } =
    useCheckboxHandler()

const usersPerPage = 10
const currentPage = ref(1)
const sortedUsers = ref([...props.users])
const sortDirection = ref(true)

const tableHeaderData = ref([
    {
        id: 1,
        imgSrc: new URL('@/assets/commonIcons/name.png', import.meta.url),
        title: 'Name',
        slug: 'name',
    },
    {
        id: 2,
        imgSrc: new URL('@/assets/commonIcons/phone.png', import.meta.url),
        title: 'Phone',
        slug: 'phone',
    },
    {
        id: 3,
        imgSrc: new URL('@/assets/commonIcons/location.png', import.meta.url),
        title: 'Location',
        slug: 'location',
    },
    {
        id: 4,
        imgSrc: new URL('@/assets/commonIcons/company.png', import.meta.url),
        title: 'Company',
        slug: 'company',
    },
    {
        id: 5,
        imgSrc: new URL('@/assets/commonIcons/status.png', import.meta.url),
        title: 'Status',
        slug: 'status',
    },
])

const totalPages = computed(() => Math.ceil(props.users.length / usersPerPage))

const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * usersPerPage
    const end = start + usersPerPage
    return sortedUsers.value.slice(start, end)
})

const sortByField = (field) => {
    sortDirection.value = !sortDirection.value

    sortedUsers.value = [...props.users].sort((a, b) => {
        if (a[field] < b[field]) return sortDirection.value ? -1 : 1
        if (a[field] > b[field]) return sortDirection.value ? 1 : -1
        return 0
    })
}

watch(
    () => props.users,
    (newUsers) => {
        sortedUsers.value = [...newUsers]
    },
)

watch(
    () => paginatedUsers.value,
    () => {
        if (paginatedUsers.value.length < usersPerPage) currentPage.value = 1
    },
)

const getCompanyBgColor = (company) => {
    switch (company) {
        case 'Google':
            return 'bg-[#FFFFFF]'
        case 'Webflow':
            return 'bg-[#4353FF]'
        case 'Facebook':
            return 'bg-[#1977F3]'
        case 'Twitter':
            return 'bg-[#1D9BF0]'
        case 'YouTube':
            return 'bg-[#FFFFFF]'
        case 'Reddit':
            return 'bg-[#FF550D]'
        case 'Spotify':
            return 'bg-[#1ED760]'
        case 'Pinterest':
            return 'bg-[#E60023]'
        case 'Twitch':
            return 'bg-[#9147FF]'
        case 'LinkedIn#9147FF':
            return 'bg-[#9147FF]'
        default:
            return 'bg-white1'
    }
}

onMounted(async () => {
    const { data } = await fetchUsers()
    emit('updateUsers', data)
})
</script>
