import { ref } from 'vue';
import axios from 'axios';
export function useUserState() {
  const state = ref({
    users: [],
  });

  const BASEURL = '/api';

  async function getAllUsers() {
    const result = await axios.get(`${BASEURL}/user`)
    
    if (result.data.totalCount > 0) {
      state.value.users = result.data.body;
    }
  }

  return {
    getAllUsers,
  }
}