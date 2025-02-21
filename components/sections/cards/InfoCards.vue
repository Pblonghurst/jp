<template lang="">
    <div class="info-cards">
        <div class="container fd-c">
            <CardInfo 
            title="Full Website Build"
            text="Want a new site? You’re in the right place. We can start with a kick off meeting where we will discover your site goals, then work on perfectly crafting the UX to ensure the user journey is clear and easy. From there we will design your site and check that you’re happy before launching it into development where we will turn your vision into a useable outcome. "
            />
            <CardInfo 
                title="UX Services"
                text="Have a pre-existing site? Want the users to be able to navigate it better? We can come in, refine aspects such as the sitemap and user journey to help you achieve the goals you would like for your site."
            />
            <CardInfo 
                title="Website Development"
                text="Already have a design and need to get the site live? We can help you with that, we specialise in site hosting, efficient code and responsive outcomes."
            />
            <CardInfo 
                title="Consultation"
                text="We can look at your site from a development or UX point of view and suggest enhancements to improve factors such as site speeds, click through rate, page retention and more."
            /> 
        </div>
    </div>
</template>
<script>
export default {
    name: "InfoCards"
}
</script>
<style lang="scss">
    @import "@/assets/styles/components/sections/cards/_info-cards.scss"; // Import SCSS file
</style>