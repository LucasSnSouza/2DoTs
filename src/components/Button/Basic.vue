<template>
    <button
        class="button-basic" 
        :class="this.class, this.type"
    >
        <slot></slot>
    </button>
</template>

<script>

export default{
    props:{
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.button-basic{
    outline: none;
    border: none;
}

</style>