<script setup lang="ts">
import Navbar from '@/components/app/Navbar.vue';
import Breadcrumb from '@/components/app/Breadcrumb.vue';
</script>

<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <Breadcrumb />
      <router-view />
    </main>
  </div>
</template>