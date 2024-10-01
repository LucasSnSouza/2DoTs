<template>

  <div class="app-game-engine-frame flex flex-column h-full w-full">

    <div class="app-superior-toolbar flex x-end gap-xlg bg-color-brand-one p-md">
      <MiscIcon
      class="pointer"
      icon="minus-icon"
      :size="[12,12]"
      />
      <MiscIcon
      class="pointer"
      icon="cube-icon"
      :size="[12,12]"
      @click="fetchFullscreen()"
      />
      <MiscIcon
        class="pointer"
        icon="x-icon"
        :size="[12,12]"
      />
      </div>

    <div class="app-screen-show h-full w-full">
      <RouterView />
    </div>

  </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { setFullscreen } from '@/utils/page';

import * as Misc from '@/components/Misc';

export default{
    data(){
        return{

        }
    },
    components: {
        ...Misc
    },
    methods: {
      fetchFullscreen(){
        setFullscreen();
      }
    }
}

</script>

<style scoped>

</style>
