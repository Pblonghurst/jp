<template lang="">
     <div class="header">
        <div class="container ai-c jc-sb">
            <Logo />
            <div class="links">
               <NuxtLink to="/">Home</NuxtLink>
               <NuxtLink to="/services">Services</NuxtLink>
               <ButtonBasic name="Contact" link="contact"/>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">
@import "@/assets/styles/components/_header.scss"; // Import SCSS file
</style>