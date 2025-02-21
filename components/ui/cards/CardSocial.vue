<template lang="">
    <div class="card-social">
        <img />
        <div>
            <h3>Jamie Greengrass</h3>
            <p>UI/UX Designer</p>
            <LinkedIn color="#756494"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardSocial",
    props: {
        title: String,
        name: String,
        img: String,
    }
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/ui/cards/_card-social.scss"; // Import SCSS file
</style>
