<template>

    <div class="cavans-wrapper w-full h-full">
        
        <canvas ref="drawboardRenderer">

            Seu hardware não possui suporte ao motor, contate o administrador.

        </canvas>

    </div>

</template>

<script>

import { getScreenDimensions, getParentElement } from '@/utils/page';
import { Core, Scene, Entity, Keyboard} from '@/utils/engine';

export default{
    data(){
        return {
            drawboard_renderer: null,
            drawboard_engine: null,
            screen_scale: null
        }
    },
    mounted(){
        this.drawboard_renderer = this.$refs.drawboardRenderer | null;

        if(this.drawboard_renderer !== null){
            
            this.screen_scale = getParentElement(this.$refs.drawboardRenderer);
            this.$refs.drawboardRenderer.width = this.screen_scale[0];
            this.$refs.drawboardRenderer.height = this.screen_scale[1];

            this.drawboard_engine = new Core(this.$refs.drawboardRenderer);
            this.drawboard_engine.addScene(new Scene("Cena"));
            this.drawboard_engine.addBehavior(new Keyboard());

            this.drawboard_engine.run(true);

        }
    }
}

</script>

<style>

</style>