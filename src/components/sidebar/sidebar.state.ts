import { computed } from 'vue';
export function useSidebarState() {
  const state = {
    sidebarItems: [
      {
        label: 'Home',
        link: '/',
        auth: false,
      },
      {
        label: 'Library',
        link: '/library',
        auth: false,
      },
      {
        label: 'Profile',
        link: '/profile',
        auth: false,
      },
    ],
  };

  const sidebarItems = computed(() => state.sidebarItems);

  return {
    sidebarItems
  };
}