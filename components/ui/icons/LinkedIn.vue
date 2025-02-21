<template lang="">
    <NuxtLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M6.07501 27H0.337495V8.94375H6.07501V27ZM3.20625 6.4125C1.35 6.4125 0 5.0625 0 3.20625C0 1.35 1.51875 0 3.20625 0C5.0625 0 6.41251 1.35 6.41251 3.20625C6.41251 5.0625 5.0625 6.4125 3.20625 6.4125ZM27 27H21.2625V17.2125C21.2625 14.3438 20.0812 13.5 18.3937 13.5C16.7062 13.5 15.0187 14.85 15.0187 17.3812V27H9.28125V8.94375H14.6812V11.475C15.1875 10.2938 17.2125 8.4375 20.0812 8.4375C23.2875 8.4375 26.6625 10.2937 26.6625 15.8625V27H27Z" :fill="color"/>
        </svg>
    </NuxtLink >
</template>
<script>
export default {
    name: "LinkedIn",
    props: {
        color: {
            type: String,
            default: "#FFFFFF", 
        },
    }
}
</script>
