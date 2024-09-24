<template>
    <div 
        class="input-text-component flex flex-column gap-sm"
        :class="this.class, type"
    >
        <p v-if="title">{{ title }}</p>
        <textarea 
            class="w-full h-full font-sm"
            :value="value"
            :placeholder="placeholder"
            :maxlength="limitChar"
            @input="$emit('update:modelValue', $event.target.value), (content = $event.target.value)"
        />
        <p 
            v-if="limitChar !== 9999"
            class="input-text-counter font-sm" 
        >
            {{ `${content.length} / ${limitChar}` }}
        </p>
    </div>
</template>

<script>

export default{
    data(){
        return {
            content: "",
        }
    },
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
            type: String || Number,
            default: null
        },
        placeholder: {
            type: String,
            default: null,
        },
        limitChar: {
            type: Number,
            default: 9999
        },
        title: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.input-text-component{
    position: relative;

    &.one{
        
        textarea{
            border: 1px solid var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            outline: none;
            height: 200px;
            padding: var(--scale-brand-lg);
        }

        .input-text-counter{
            color: var(--color-brand-four);
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
        
    }

}

</style>