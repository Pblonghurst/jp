<template>
    <div class="button-hamburger">
        <button 
            @click="handleClick"
            class="burger"
            :class="{'toggle': isActive, 'untoggle': !isActive,}" >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/ui/buttons/_button-hamburger.scss';
</style>

<script>
export default {
    name: 'ButtonHamburger',
    props: {
        text: String,
        index: Number
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        handleClick() {
        this.$emit('burger-click', this.isActive);
        this.isActive = !this.isActive;
        },
  },
}
</script>

