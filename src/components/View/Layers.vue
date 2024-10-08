<template>

    <div class="view-layers-wrapper h-full flex flex-column gap-md">

        <div class="title-element w-full p-md flex x-start y-center bg-color-brand-three">
            <p class="font-xsm color-brand-four">Camadas</p>
        </div>

        <div class="p-md flex flex-column gap-md">
            
            <p class="font-xsm color-brand-five">Geral</p>
            <div 
                class="grid gap-md"
                style="grid-template-columns: 3fr 0.5fr"
            >
                <InputText
                    placeholder="Criar nova camada ..."
                    v-model="createLayername"
                    :value="createLayername"
                />
                <ButtonBasic
                    class="bg-color-brand-three color-brand-four font-xsm flex x-center y-center w-full p-lg rounded-sm pointer"
                    @click="createLayer(createLayername), createLayername = null"
                >
                    <p class="font-xsm">Criar</p>               
                </ButtonBasic>
            </div>

            <p class="font-xsm color-brand-five">Propriedades</p>
            <ButtonBasic
                v-if="getActiveLayer() == null"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Nenhuma camada selecionada</p>
            </ButtonBasic>
            <div v-else>
                {{getActiveLayer().name()}}
            </div>

            <p class="font-xsm color-brand-five">Camadas</p>

            <ButtonBasic
                v-if="getLayersListCore().length == 0"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Essa cena ainda não possui camadas</p>
            </ButtonBasic>

            <div 
                v-else
                class="flex flex-column gap-md"
            >
                <ButtonBasic
                    v-for="(item, index) of getLayersListCore()"
                    class="bg-color-brand-three color-brand-four font-xsm x-start y-center w-full p-md rounded-sm pointer"
                    :key="index"
                    @click="setLayerStore(item)"
                >
                    <div class="flex gap-lg">
                        <MiscIcon
                            icon="wrap-icon"
                            :size="[16,16]"
                        />
                        <p>{{ item.name() }}</p>
                    </div>
                </ButtonBasic>
            </div>            

        </div>
    </div>

</template>

<script>

import { useCore } from '@/stores/core';

import * as Misc from '@/components/Misc';
import * as Button from '@/components/Button';
import * as Input from '@/components/Input';

import { Scene, Layer, Entity, Keyboard } from '@/utils/2d';

export default{
    data(){
        return{
            core: null,
            createLayername: null,
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
        createLayer(name="undefined"){
            this.core.getSceneList(this.getActiveScene().name()).addLayer(new Layer(name));
        },
        getLayersListCore(){
            return this.core.getSceneList(this.getActiveScene().name()).getLayersList();
        },
        getActiveLayer(){
            return useCore().getLayer;
        },
        getActiveScene(){
            return useCore().getScene;
        },
        setLayerStore(layer){
            useCore().fetchLayer(layer);
        }
    },
    created(){
        this.core = useCore().getCore;
    }
}

</script>

<style lang="scss" scoped>

.view-layers-wrapper{
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