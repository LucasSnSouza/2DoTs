<template>
    <label 
        class="checkbox-wrapper flex gap-md y-center"
        :class="this.class, type"
        :for="name"
    >
        <input 
            type="checkbox" 
            :id="name" 
            :value="value" 
            :name="this.name"
            :checked="checked"
            @input="$emit('update:modelValue', $event.target.checked ? value : null )">
            <p v-if="title">{{ title }}</p>
    </label>
</template>

<script>

export default{
    props: {
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        },
        value: {
            type: [ String, Number, Boolean, Array, Object ],
            default: null
        },
        checked: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: "checkbox"
        },
        title: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.checkbox-wrapper{

    &.one{
        padding: var(--scale-brand-md);
        border-radius: var(--scale-brand-md);
        background: var(--color-brand-one);
        box-shadow: var(--scale-brand-sm) var(--scale-brand-sm) var(--scale-brand-md) rgba(0, 0, 0, 0.10);

        input{

            min-width: 14px;
            height: 14px;
            background: none;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            &::after {
                content: "";
                display: flex;
                min-width: 100%;
                min-height: 100%;
                border-radius: var(--scale-brand-sm);
                border: 1px solid var(--color-brand-two);
                background: var(--color-brand-one);
            }
            &:checked::after {
                background: var(--color-brand-two);
            }
            &:checked::before {
                content: "";
                display: flex;
                position: absolute;
                width: 60%;
                height: 60%;
                background: var(--color-brand-one);
                clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
            }
        }
        p{
            margin-top: 0px;
        }
    }
    
}

</style>