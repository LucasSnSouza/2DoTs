<template>

    <div class="view-scenes-wrapper h-full flex flex-column gap-md">

        <div class="title-element w-full p-md flex x-start y-center bg-color-brand-three">
            <p class="font-xsm color-brand-four">Cenas</p>
        </div>

        <div class="p-md flex flex-column gap-md">
            
            <p class="font-xsm color-brand-five">Geral</p>
            <div 
                class="grid gap-md"
                style="grid-template-columns: 3fr 0.5fr"
            >
                <InputText
                    placeholder="Criar nova cena ..."
                    v-model="createScenename"
                    :value="createScenename"
                />
                <ButtonBasic
                    class="bg-color-brand-three color-brand-four font-xsm flex x-center y-center w-full p-lg rounded-sm pointer"
                    @click="createScene(createScenename), createScenename = null"
                >
                    <p class="font-xsm">Criar</p>               
                </ButtonBasic>
            </div>

            <p class="font-xsm color-brand-five">Propriedades</p>
            <ButtonBasic
                v-if="getActiveScene() == null"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Nenhuma cena selecionada</p>
            </ButtonBasic>
            <div v-else>
                <InputEncapsuled
                    title="Name"
                    v-model="form_scene['sceneName']"
                    :value="form_scene['sceneName']"
                />
            </div>

            <p class="font-xsm color-brand-five">Cenas</p>

            <ButtonBasic
                v-if="getScenesListCore().length == 0"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Ainda não existe cenas criadas</p>
            </ButtonBasic>

            <div 
                v-else
                class="flex flex-column gap-md"
            >
                <ButtonBasic
                    v-for="(item, index) of getScenesListCore()"
                    class="bg-color-brand-three color-brand-four font-xsm x-start y-center w-full p-md rounded-sm pointer"
                    :key="index"
                    @click="setSceneStore(item)"
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

import { Scene, Entity, Keyboard } from '@/utils/2d';

export default{
    data(){
        return{
            core: null,
            form_scene: {
                
            },
            createScenename: null,
        }
    },
    components: {
        ...Misc,
        ...Button,
        ...Input
    },
    props:{
    },
    computed: {
    },
    watch: {
        "form_scene.sceneName": {
            handler(value){
                useCore().getScene._name = value;
            }
        }
    },
    methods: {
        createScene(name="undefined"){
            useCore().getCore.addScene(new Scene(name));
        },
        getScenesListCore(){
            return this.core.getSceneList();
        },
        getActiveScene(){
            return useCore().getScene;
        },
        setSceneStore(scene){
            useCore().wipeDatas(null, true, true, true);
            useCore().fetchScene(scene);
            this.form_scene = {
                sceneName: this.getActiveScene().name(),
            };
        }
    },
    created(){
        this.core = useCore().getCore;
    },
    mounted(){
        this.form_scene = {
            sceneName: this.getActiveScene()?.name(),
        };
    }
}

</script>

<style lang="scss" scoped>

.view-scenes-wrapper{
    min-width: 300px;
    background-color: rgb(24, 24, 24, 0.8);
    backdrop-filter: blur(2px);

    .title-element{
        height: 50px;
    }
}

</style>