<template>

    <div class="view-entity-wrapper h-full flex flex-column gap-md">

        <div class="title-element w-full p-md flex x-start y-center bg-color-brand-three">
            <h1 class="font-xsm color-brand-four">Entidade</h1>
        </div>

        <div class="p-md flex flex-column gap-md">
            <h1 class="font-xsm color-brand-five">Geral</h1>
            <ButtonBasic
                class="bg-color-brand-three color-brand-four font-xsm flex x-center y-center w-full p-md rounded-sm pointer relative"
                @click="createNewEntity()"
            >
                <p>Criar nova entidade</p>
            </ButtonBasic>
            <h1 class="font-xsm color-brand-five">Propriedades</h1>
            <ButtonBasic
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Nenhuma entidade selecionada</p>
            </ButtonBasic>
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

.view-entity-wrapper{
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