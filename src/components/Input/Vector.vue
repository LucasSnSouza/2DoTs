<template>

    <div class="input-vector">
        <div class="flex gap-md">

            <div
                v-if="title" 
                class="input-vector-title w-half bg-color-brand-three rounded-sm flex x-start y-center p-md color-brand-four font-xsm"
            >
                {{ title }}
            </div>
            <div 
                class="flex gap-md"
                :class="title ? 'w-half' : 'w-full'"
            >
                <InputText
                    v-for="(item, index) of range"
                    v-model="form_values[index]"
                    :value="values[index]"
                    :disabled="disabled"
                    @input="$emit('update:modelValue', form_values )"
                    :key="index"
                />
            </div>
        </div>
    </div>

</template>

<script>

import InputText from "./Text.vue";
import ButtonBasic from "../Button/Basic.vue";

export default{
    data(){
        return {
            form_values: [...this.values],
        }
    },
    props: {
        type: {
            type: String,
            default: 'TEXT',
            exemple: ['TEXT', 'NUMBER']
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: null
        },
        vectors: {
            type: Number,
            default: 1,
        },
        values: {
            type: Array,
            default: () => []
        },
    },
    components: {
        InputText,
        ButtonBasic
    },
    computed: {
        range(){
            return Array.from({ length: this.vectors}, (_, i) => i++)
        }
    },
    methods: {
        getRange(range){
            return Array.from({ length: this.vectors}, (_, i) => "0")
        }
    },
    created(){

    }
}

</script>

<style scoped>

</style>