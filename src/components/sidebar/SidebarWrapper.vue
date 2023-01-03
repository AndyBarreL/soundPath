<template>
  <CListGroup>
    <CListGroupItem
      v-for="(item, index) in sidebarItems"
      :key="index"
    >
      <CLink :href="item.link">
        {{  item.label + ' ' + item.link  }}
      </CLink>
    </CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { useSidebarState } from './sidebar.state.ts';

const { sidebarItems } = useSidebarState();
</script>
