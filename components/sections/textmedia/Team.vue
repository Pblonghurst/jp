<template lang="">
    <div class="team">
        <div class="container center">
            <div class="team__title">
                <h2>Meet our <span><</span><span class="team__title__small">small</span><span>></span> team</h2>
                <p>Having previously worked together at our past agency, we’ve decided to put our energy into starting something of our own - hence the birth of Aether.</p>
                <img />
            </div>
        </div>
        <div class="container center">
            <CardTeam name="Jamie G" text="Jamie has nearly 5 years experience in the design industry, specialises in UX and motion design. Is an innovative thinker and ready to get to jump on any project and help London businesses connect with their users."/>
            <!-- <LineTwo />  -->
            <CardTeam name="Philip L" text="Big Phil is an absolute legend, and the personification of a chill guy. Having over 5 years as a Developer specialising in coding and stuff, he’s ready to help out London with their website needs"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Team"
}
</script>

<style lang="scss">
    @import "@/assets/styles/components/sections/textmedia/_team.scss"; // Import SCSS file
</style>