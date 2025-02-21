<template lang="">
    <div class="card-info">
        <div class="card-info__top">
            <h2>{{ title }}</h2>
            <ButtonBasic name="Book a Call"/>
        </div>
        <div class="card-info__bot">
            <img />
            <p>{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardInfo",
    props: {
        title: String,
        text: String,
    }
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/ui/cards/_card-info.scss"; // Import SCSS file
</style>