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
                    v-model="content"
                    :value="value"
                    :disabled="disabled"
                    @input="$emit('update:modelValue', content)"
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
            content: null,
        }
    },
    props: {
        title: {
            type: String,
            default: null
        },
        disabled:{
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: null
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

    },
    created(){

    }
}

</script>

<style scoped>

</style>