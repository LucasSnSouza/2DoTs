<template>

    <div class="view-scenes-wrapper h-full flex flex-column gap-md">

        <div class="title-element w-full p-md flex x-start y-center bg-color-brand-three">
            <h1 class="font-xsm color-brand-four">Cenas</h1>
        </div>

        <div class="p-md flex flex-column gap-md">
            


        </div>
    </div>

</template>

<script>

import { useCore } from '@/stores/core';
import * as Misc from '@/components/Misc';
import * as Button from '@/components/Button';

import { Scene, Entity, Keyboard } from '@/utils/2d';

export default{
    data(){
        return{

        }
    },
    components: {
        ...Misc,
        ...Button,
    },
    props:{
    },
    methods: {
        createNewEntity(){
            useCore().getCore.addScene(new Scene('teste'));
        }
    }
}

</script>

<style lang="scss" scoped>

.view-scenes-wrapper{
    position: absolute;
    margin-left: 50px;
    min-width: 300px;
    background-color: rgb(24, 24, 24, 0.8);
    backdrop-filter: blur(2px);

    .title-element{
        height: 50px;
    }
}

</style>