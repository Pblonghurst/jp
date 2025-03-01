<template lang="">
    <div class="footer">
        <div class="footer__divider"></div>
        <div class="container jc-sb ai-c">
            <!-- logo -->
            <LogoFooter />
            <!-- links -->
            <NuxtLink to="services">Services</NuxtLink> 
            <NuxtLink to="contact">Contact</NuxtLink>
            <!-- socials -->
            <div class="footer__socials">
                <LinkedIn />
                <Instagram />
                <Youtube />
                <Facebook />
            </div>
        </div>
        <div class="container ai-c jc-c">
            <p class="footer__legal">© 2025 Studio Aether | London |  All rights reserved</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/_footer.scss"; // Import SCSS file
</style>