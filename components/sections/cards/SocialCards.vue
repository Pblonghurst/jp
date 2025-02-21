<template lang="">
    <div class="social-cards">
        <div class="container ai-c jc-c">
            <h2>Who will you be talking to?</h2>
        </div>
        <div class="container fd-c jc-sb">
            <div class="social-cards__items"> 
                <CardSocial />
                <CardSocial />
            </div>
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