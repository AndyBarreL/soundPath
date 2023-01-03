<template>
  <CContainer fluid class="fh">
    <CRow class="fh">
      <CCol lg="3" class="bg-dark py-3">
        <SideBarWrapper />
      </CCol>
      <CCol md="9" class="bg-light py-3">
        123
      </CCol>
    </CRow>
  </CContainer>
</template>

<script setup>
import SideBarWrapper from './components/sidebar/SidebarWrapper.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
}

.fh {
  height: 100%;
}
</style>
