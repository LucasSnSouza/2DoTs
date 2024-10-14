<template>

    <div class="view-game-editor-wrapper w-full h-full flex bg-color-brand-one relative">

        <div class="game-editor-slash-menu h-full bg-color-brand-one p-sm gap-sm flex flex-column">

            <div class="game-editor-engine-icon flex x-center y-center aspect-ratio bg-color-brand-three">
                <MiscIcon
                    icon="2d-engine-icon"
                    :size="[24,24]"
                />
            </div>

            <ButtonBasic
                v-for="(item, index) of dynamicFormViews"
                class="bg-color-brand-two flex x-center y-center w-full aspect-ratio rounded-sm pointer relative"
                :disabled="item?.disabled"
                :key="index"
                @click="setMenuHighlight(index)"
            >
                <span v-if="item?.opened" class="indicator-bar-higthlight"></span>
                <MiscIcon
                    :class="{'o-1-4': item?.disabled}"
                    :icon="item?.icon"
                    :size="[18,18]"
                />
            </ButtonBasic>

        </div>

        <ViewEntity
            v-if="form_views[0].opened"
            @changePage="(data) => {setMenuHighlight(data)}"
        />

        <ViewLayers
            v-if="form_views[1].opened"
            @changePage="(data) => {setMenuHighlight(data)}"
        />

        <ViewScenes
            v-if="form_views[2].opened"
        />

        <div class="game-editor-framed-engine w-full">
            <MiscCanvas
                engine="2d"
            >
            </MiscCanvas>
        </div>

    </div>

</template>

<script>

import { useCore } from '@/stores/core';

import * as Misc from '@/components/Misc';
import * as Button from '@/components/Button';
import * as View from '@/components/View';

export default{
    data(){
        return{
            form_views:[
                {
                    icon: "entity-icon",
                    disabled: useCore().getScene == null,
                    opened: false,
                },
                {
                    icon: "layers-icon",
                    disabled: useCore().getScene == null,
                    opened: false,
                },
                {
                    icon: "scene-icon",
                    disabled: true,
                    opened: false,
                }
            ]
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...View
    },
    computed: {
        dynamicFormViews(){
            return this.form_views.map((item, index) => {
                if(index == 0){
                    return {
                        ...item,
                        disabled: useCore().getLayer == null
                    }
                }
                else if(index == 1){
                    return {
                        ...item,
                        disabled: useCore().getScene == null
                    }
                }
                else if(index == 2){
                    return {
                        ...item,
                        disabled: false
                    }
                }
            })
        }
    },
    methods: {
        setMenuHighlight(clicked){
            this.form_views = this.form_views.map((item, index) => ({
                ...item,
                opened: clicked == index ? !item.opened : false,
            }))
        },
    },
    created(){
    }
}

</script>

<style lang="scss" scoped>

.view-game-editor-wrapper{

    .game-editor-slash-menu{
        padding-top: 0px;
        min-width: 50px;

        .game-editor-engine-icon{
            margin-left: -4px;
            width: calc(100% + 8px);
        }

    }

}

.indicator-bar-higthlight{
    width: 3px;
    height: 60%;
    position: absolute;
    border-radius: 999px;
    left: 0;
    background: var(--color-brand-three);
}

</style>