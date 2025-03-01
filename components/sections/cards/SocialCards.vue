<template lang="">
    <div class="social-cards">
        <div class="container ai-c jc-c">
            <h2>Who will you be talking to?</h2>
        </div>
        <div class="container jc-sb ai-c">
            <CardSocial />
            <CardSocial />
        </div>
    </div>
</template>
<script>
export default {
    name: "SocialCards"
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/sections/cards/_social-cards.scss"; // Import SCSS file
</style>