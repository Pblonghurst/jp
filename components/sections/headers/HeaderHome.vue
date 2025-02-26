<template lang="">
    <div class="header-home"> 
        <div class="header-home__wrapper">
            <div class="header-home__wrapper__media">
                <h1>
                    Studio
                    <span>Aether</span>
                </h1>
                <img />
            </div>
            <div class="header-home__wrapper__text" >
                <p>London Based <span>Design</span> & <span>Development</span>  Studio</p>
                <div>
                    <Instagram />
                    <LinkedIn />
                </div>
                <p>New to the London Agency scene, we’re here with a mission of providing affordable, yet creative solutions that send boring ideas to the aether, allowing businesses to connect with their users through a personal, yet professional service.</p>
                <ButtonBasic name="Contact"/>
                <h2>What can we help with?</h2>
            </div>
        </div>
        <div class="divider">
        </div>
    </div>
</template>
<script>
export default {
    name: "HeaderHome"
}
</script>

<style lang="scss">
    @import "@/assets/styles/components/sections/headers/_header-home.scss"; // Import SCSS file
</style>