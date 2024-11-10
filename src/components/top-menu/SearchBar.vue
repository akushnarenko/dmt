<template>
    <div class="flex relative items-center pt-[30px] pb-[50px] pl-[40px]">
        <span class="text-style-1 text-size-2 text-white1"> Users </span>
        <span class="absolute w-[13.33px] h-[13.33px] left-[161.33px] z-10">
            <img src="../../assets/commonIcons/searchIcon.png" alt="" />
        </span>
        <input
            type="text"
            v-model="inputText"
            placeholder="Search for..."
            class="input ml-[50px]"
            @input="filterUser"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGetUsers } from '../../utils/useGetUsers'

const { getUsers, debounce } = useGetUsers()
const props = defineProps({
    users: {
        type: Array,
        default: null,
    },
})

const emit = defineEmits(['updateUsers'])

const inputText = ref('')

const filterUser = debounce(() => {
    const query = inputText.value.toLowerCase()

    const filtered = !query
        ? props.users
        : props.users.filter(
              (user) =>
                  user.name.toLowerCase().includes(query) ||
                  user.email.toLowerCase().includes(query) ||
                  user.company.toLowerCase().includes(query) ||
                  user.phone.includes(query),
          )
    emit('updateUsers', filtered)
}, 500)
</script>
