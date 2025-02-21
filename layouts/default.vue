<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <main>
      <slot /> <!-- This renders the page content -->
    </main>
    <Footer />
  </div>
</template>
