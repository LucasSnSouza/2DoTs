<template>

    <div class="cavans-wrapper w-full h-full">
        
        <canvas ref="drawboardRenderer" class="bg-color-brand-two">

            Seu hardware não possui suporte ao motor, contate o administrador.

        </canvas>

    </div>

</template>

<script>

import { useCore } from '@/stores/core';
import { getScreenDimensions, getParentElement } from '@/utils/page';
import { Core, Scene, Entity, Keyboard} from '@/utils/2d';

export default{
    data(){
        return {
            drawboard_renderer: null,
            core: null,
            screen_scale: null,
            form: null,
        }
    },
    props: {
        engine: {
            type: String,
            default: "2d"
        }
    },
    mounted(){

        this.drawboard_renderer = this.$refs.drawboardRenderer | null;

        if(this.drawboard_renderer !== null){
            
            this.screen_scale = getParentElement(this.$refs.drawboardRenderer);
            this.$refs.drawboardRenderer.width = this.screen_scale[0];
            this.$refs.drawboardRenderer.height = this.screen_scale[1];

            if(this.engine == "2d"){
                this.core = new Core(this.$refs.drawboardRenderer, (form) => {
                    this.$emit('onFrameCreated', form);
                });
            }
            
            this.core.run(true);
            useCore().fetchCore(this.core);

        }
    }
}

</script>

<style>

</style>