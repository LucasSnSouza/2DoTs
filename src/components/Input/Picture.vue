<template>

    <div 
        class="input-picture w-full"
        :class="type"
    >   
        <div class="flex gap-md">
            <span
                v-for="(picture, index) of images"
                class="picture-container flex x-center y-center"
                :key="index"
            >
                <img class="h-full" :src="picture">
            </span>
            <label 
                v-if="images.length < maxImages"
                for="file"
                class="add flex x-center y-center"
            >
                <input 
                    id="file" 
                    type="file" 
                    hidden
                    @change="registerImage"
                />
                <MiscIcon
                    icon="add-image-icon"
                    :size="[24, 24]"
                    color="rgb(37, 37, 37)"
                />
            </label>
        </div>
    </div>

</template>

<script>

import * as Misc from '@/components/Misc';

export default{
    data() {
        return {
           images: [], 
        }
    },
    props: {
        type: {
            type: String,
            default: "one"
        },
        maxImages: {
            type: Number,
            default: 1
        }
    },
    components: {
        ...Misc
    },
    methods: {
        registerImage(event) {
            const imageReader = new FileReader();
            imageReader.onload = (e) => {
                this.images.push(e.target.result);
                this.$emit('update:modelValue', this.images);
            }
            imageReader.readAsDataURL(event.target.files[0]);
        }
    }
}

</script>

<style lang="scss" scoped>

.input-picture{

    &.one{

        div{
            display: flex;
            flex-direction: column;
        }

        span{
            width: 100%;
            height: 110px;
            background: var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            overflow: hidden;
        }
        
        label{
            border: 2px dashed var(--color-brand-two);
            border-radius: var(--scale-brand-md);
            width: 100%;
            height: 110px;
        }

    }

}

</style>