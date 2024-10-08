<template>

    <div class="view-entity-wrapper h-full flex flex-column gap-md">

        <div class="title-element w-full p-md flex x-start y-center bg-color-brand-three">
            <p class="font-xsm color-brand-four">Entidade</p>
        </div>

        <div class="p-md flex flex-column gap-md">
            <p class="font-xsm color-brand-five">Geral</p>
            <div 
                class="grid gap-md"
                style="grid-template-columns: 3fr 0.5fr"
            >
                <InputText
                    placeholder="Criar nova entidade ..."
                    v-model="createEntityname"
                    :value="createEntityname"
                />
                <ButtonBasic
                    class="bg-color-brand-three color-brand-four font-xsm flex x-center y-center w-full p-lg rounded-sm pointer"
                    @click="createEntity(createEntityname), createEntityname = null"
                >
                    <p class="font-xsm">Criar</p>               
                </ButtonBasic>
            </div>

            <p class="font-xsm color-brand-five">Propriedades</p>
            <ButtonBasic
                v-if="getActiveEntity() == null"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Nenhuma entidade selecionada</p>
            </ButtonBasic>
            <div v-else>
                {{getActiveEntity().name()}}
            </div>
        </div>
    </div>

</template>

<script>

import { useCore } from '@/stores/core';
import * as Misc from '@/components/Misc';
import * as Button from '@/components/Button';
import * as Input from '@/components/Input';

import { Scene, Entity, Keyboard } from '@/utils/2d';

export default{
    data(){
        return{
            createEntityname: null,
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...Input
    },
    props:{
    },
    methods: {
        createEntity(name="undefined"){
            let entity = this.getActiveLayer().addEntity(new Entity(name));
            this.setEntityStore(entity);
        },
        setEntityStore(entity){
            useCore().fetchEntity(entity);
        },
        getActiveEntity(){
            return useCore().getEntity;
        },
        getActiveLayer(){
            return useCore().getLayer;
        },
        getActiveScene(){
            return useCore().getScene;
        },
    }
}

</script>

<style lang="scss" scoped>

.view-entity-wrapper{
    min-width: 300px;
    background-color: rgb(24, 24, 24, 0.8);
    backdrop-filter: blur(2px);

    .title-element{
        height: 50px;
    }
}

.modular-text-box{
    grid-template-columns: 3fr 1fr;
}

</style>