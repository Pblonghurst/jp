<template lang="">
    <div class=header-contact>
        <div class="container">
            <div class="header-contact__left">
                <h1>
                    Studio
                    <span>Aether</span>
                    <div class="underline"></div>
                </h1>
                <p>
                    Need a website designed and developed? Or need any of our other services? We can help.<br><br> 
                    Either fill out the form with your details and a message and we will get in touch, or find the button below to schedule in a call with us, where we can discuss your idea for free.
                </p>
                <ButtonBasic name="Book a Call" :dark=true />
            </div>

            <div class="header-contact__left">

            </div>
    
        </div>
    </div>
</template>
<script>
export default {
    name: "HeaderContact"
}
</script>

<style lang="scss">
    @import "@/assets/styles/components/sections/headers/_header-contact.scss"; // Import SCSS file
</style>