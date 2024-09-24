<template>
    <div class="modal-wrapper flex x-center y-center">
        <div class="modal-panel">
            <div class="modal-slot-screen p-xlg font-xsm">
                <h1
                    v-if="title != ''"
                    style="font-size: 11pt; padding-bottom: 15px;"
                    class="o-3-4"
                >
                    {{ title }}
                </h1>
                <slot>
                </slot>
            </div>
            <div class="modal-action-button p-md w-full flex x-end y-center gap-md">
                <ButtonBasic
                    v-for="(item, index) of buttons"
                    :key="index"
                    :class="item?.class"
                    @click="$emit(`on${item?.type}`)"
                >
                    {{ item?.text }}
                </ButtonBasic>
            </div>
        </div>
    </div>
</template>

<script>

import * as Button from "@/components/Button"

export default{
    components: {
        ...Button
    },
    props:{
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: ""
        },
        buttons: {
            type: Array,
            default: () => []
        }
    }
}

</script>

<style lang="scss" scoped>

.modal-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;

    .modal-panel{
        width: 500px;
        height: auto;
        overflow: hidden;
        border-radius: 4px;
        background: white;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.100);

        .modal-action-button{
            height: 50px;
            background: var(--color-brand-two);
        }

    }
}

</style>