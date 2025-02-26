<template lang="">
    <div class="card-team">
        <img />
        <h3>{{ name }}</h3>
        <p>{{ text }}</p>
        <div class="card-team__buttons">
            <ButtonBasic name="Download CV"/>
            <ButtonBasic name="Download Portfolio" :light=true />
        </div>
    </div>
</template>
<script>
export default {
    name: "CardTeam",
    props: {
        name: String,
        text: String 
    }
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/ui/cards/_card-team.scss"; // Import SCSS file
</style>