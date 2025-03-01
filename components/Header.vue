<template lang="">
     <div class="header__wrapper">
        <div class="header">
            <div class="container ai-c jc-sb">
                <Logo />
                <div class="links links-desk">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/services">Services</NuxtLink>
                <ButtonBasic name="Contact" link="contact"/>
                </div>
                <!-- hamburger menu -->
                <ButtonHamburger @burger-click="onBurgerClick"/>
            </div>
        </div> 
        <div class="links links-mob"
        :class="{'open': !isOpen}"
        >
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <ButtonBasic name="Contact" link="contact"/>
        </div>
    </div> 

</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            isOpen: Boolean
        }
    },
    methods: {
        onBurgerClick(isActive) {
            this.isOpen = isActive
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/styles/components/_header.scss"; // Import SCSS file
</style>