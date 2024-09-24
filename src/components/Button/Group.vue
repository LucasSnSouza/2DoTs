<template>
    <div 
        class="button-group-wrapper w-full flex gap-sm"
        :class="this.type"
    >
        <button
            v-for="(item, index) of formComputed"
            class="w-full"
            :class="{'selected': item.status}"
            :key="index"
            @click="toggleSelect(index, item?.value || false)"
        >
            <p>{{ item?.label || 'undefined' }}</p>
        </button>
    </div>
</template>

<script>

export default{
    data(){
        return {
            formComputed: [],
        }
    },
    props: {
        type: {
            type: String,
            default: "one"
        },
        form: {
            type: Array,
            default: () => []
        }
    },
    created(){
        this.formComputed = this.form.map((item, index) => {
            if (index === 0){
                return { ...item, status: true };
            }
            return { ...item, status: false };
        });
        this.$emit('update:modelValue', this.formComputed[0]?.value || false);
    },
    methods: {
        toggleSelect(index, value){
            const updatedForm = this.formComputed.map((item, index_form) => {
                if(index_form === index){
                    return { ...item, status: true };
                }
                return { ...item, status: false };
            })
            this.$emit('update:modelValue', value);
            this.formComputed = updatedForm;
        }
    }
}

</script>

<style lang="scss" scoped>

.button-group-wrapper{

    &.one{

        background: none;
        border: 1px solid var(--color-brand-two);
        border-radius: var(--scale-brand-sm);
        padding: var(--scale-brand-sm);
        
        button{
            background: none;
            color: var(--color-brand-two);
            font-size: var(--text-brand-sm);
            padding: var(--scale-brand-md);
            border: none;
            border-radius: var(--scale-brand-sm);
            transition: .2s;

            &.selected{
                background: var(--color-brand-two);
                color: var(--color-brand-one);
            }
        }

    }

}

</style>