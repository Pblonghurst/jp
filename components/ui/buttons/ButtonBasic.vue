<template lang="">
    <NuxtLink :to=link>
        <button class="button-basic"
            :class="{ light: light, dark: dark }"
        >
            {{ name }}
        </button>
    </NuxtLink>
</template>

<script>
export default {
    name: "ButtonBasic",
    props: {
        name: String,
        link: String,
        light: Boolean,
        dark: Boolean
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/components/ui/buttons/_button-basic.scss"; // Import SCSS file
</style>