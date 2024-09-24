<template>

    <div 
        class="word-icon-generator-wrapper w-full aspect-ratio relative flex x-center y-center hidden"
        :style="{ background: bgColor}"
        :class="this.class"
    >

        <h1
            v-if="effect.includes('rewrite')"
            class="o-1-4"
            style="transform: scale(6) rotate(-15deg); position: absolute;"
            :style="{ color: textColor, fontSize: `${textSize}pt` }"
        >
            {{ text.split(' ').map(word => word[0]).join('') }}
        </h1>

        <h1
            :style="{ color: textColor, fontSize: `${textSize}pt` }"
        >
            {{ text.split(' ').map(word => word[0]).join('') }}
        </h1>

    </div>

</template>

<script>

import { HexadecimalRandomColor } from '@/utils/generator';

export default{
    data(){
        return{

        }
    },
    props: {
        class: {
            type: String,
            default: ""
        },
        text: {
            type: String,
        },
        textColor: {
            type: String,
            default: "#FFFFFF"
        },
        textSize: {
            type: Number,
            default: 12
        },
        effect: {
            type: Array,
            default: () => [],
            examples: ["rewrite"]
        },
        bgColor: {
            type: String,
            default: HexadecimalRandomColor,
        }
    }
}

</script>

<style>

</style>