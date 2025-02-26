<template lang="">
    <div class="card-cta">
        <img />
        <div class="card-cta__text">
            <h3>{{ title }}</h3>
            <ButtonBasic name="Learn More"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardCta",
    props: {
        title: String,
        text: String
    }
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/ui/cards/_card-cta.scss"; // Import SCSS file
</style>