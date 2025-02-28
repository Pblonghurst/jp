<template lang="">
    <div class="cta-cards">
        <div class="container">
            <LineOne />
            <div class="cta-cards__wrapper">
                <CardCta title="Full Website Build" text=""/>
                <CardCta title="Full Website Build"/>
                <CardCta title="Full Website Build"/>
                <CardCta title="Full Website Build"/> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CtaCards"
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/sections/cards/_cta-cards.scss"; // Import SCSS file
</style>