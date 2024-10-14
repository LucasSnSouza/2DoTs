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
            <InputEncapsuled
                title="Layer Ativa"
                disabled
                v-model="form_entity['layerName']"
                :value="form_entity['layerName']"
            />
            <InputEncapsuled
                title="Cena Ativa"
                disabled
                v-model="form_entity['sceneName']"
                :value="form_entity['sceneName']"
            />

            <p class="font-xsm color-brand-five">Propriedades</p>
            <ButtonBasic
                v-if="getActiveEntity() == null"
                class="bg-color-brand-three color-brand-three font-xsm flex x-center y-center w-full p-lg rounded-sm ghost"
            >
                <p class="color-brand-four">Nenhuma entidade selecionada</p>
            </ButtonBasic>
            <div 
                v-else
                class="flex flex-column gap-md"
            >
                <InputEncapsuled
                    title="Nome"
                    v-model="form_entity['entityName']"
                    :value="form_entity['entityName']"
                />
                <InputVector
                    title="Posição"
                    v-model="form_entity['entityPosition']"
                    :values="form_entity['entityPosition']"
                    :vectors="2"
                />
                <InputVector
                    title="Escala"
                    v-model="form_entity['entitySize']"
                    :values="form_entity['entitySize']"
                    :vectors="2"
                />
                <InputEncapsuled
                    title="Cor"
                    v-model="form_entity['entityColor']"
                    :value="form_entity['entityColor']"
                />
                <!-- {{ form_entity }} -->
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
            createEntityname: null,
            form_entity: {
            },
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
        "form_entity.entitySize": {
            handler(value){
                this.getActiveEntity()._transform.size = value;
            }
        },
        "form_entity.entityPosition": {
            handler(value){
                this.getActiveEntity()._transform.position = value;
            }
        },
        "form_entity.entityName": {
            handler(value){
                this.getActiveEntity()._name = value;
            }
        },
        "form_entity.entityColor": {
            handler(value){
                this.getActiveEntity()._meta.color = value;
            }
        }
    },
    methods: {
        createEntity(name="undefined"){
            this.setEntityStore(this.getActiveLayer().addEntity(new Entity(name)));
        },
        setEntityStore(entity){
            useCore().fetchEntity(entity);
            this.form_entity = {
                ...this.form_entity,
                entitySize: this.getActiveEntity()._transform.size.map(num => num.toString()),
                entityPosition: this.getActiveEntity()._transform.position.map(num => num.toString()),
                entityName: this.getActiveEntity()?.name(),
                entityColor: this.getActiveEntity()?.color(),
            }
            this.$emit('changePage', 1);
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
    },
    created(){
        this.core = useCore().getCore;
        this.form_entity = {
            layerName: this.getActiveLayer()?.name(),
            sceneName: this.getActiveScene()?.name(),
            entityName: this.getActiveEntity()?.name(),
            entityPosition: this.getActiveEntity()?.position(),
            entitySize: this.getActiveEntity()?.size(),
            entityColor: this.getActiveEntity()?.color(),
        }
    },
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