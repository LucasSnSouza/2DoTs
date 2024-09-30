<template>

    <div class="view-game-runtime-wrapper w-full h-full">
        
        <MiscCanvas
            engine="2d"
        >
        </MiscCanvas>

    </div>

</template>

<script>

import * as Misc from '@/components/Misc';

export default{
    data(){
        return {
        }
    },
    components: {
        ...Misc
    }
}

</script>

<style>

</style>