import axios from "axios";

import { useDebounce } from "./useDebounce";
import { defineEmits } from "vue";

export const useGetUsers = () => {
  const { debounce } = useDebounce();

  const emit = defineEmits(["updateUsers"]);

  const fetchUsers = async () => {
    return await axios.get("/data/users.json");
  };

  function getUsers() {
    try {
      debounce(async () => {
        const { data } = await fetchUsers();

        emit("updateUsers", data);
      }, 500);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getUsers,
    debounce,
    fetchUsers,
  };
};
