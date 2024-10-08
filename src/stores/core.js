import { defineStore } from 'pinia';

export const useCore = defineStore('core', {
  state: () => ({
    core: null,
    scene: null,
    layer: null,
    entity: null,
  }),
  actions: {
    fetchCore(data){
        this.core = data;
    },
    fetchScene(data){
      this.scene = data;
    },
    fetchLayer(data){
      this.layer = data;
    },
    fetchEntity(data){
      this.entity = data;
    }
  },
  getters: {
    getCore: (state) => state.core,
    getScene: (state) => state.scene,
    getLayer: (state) => state.layer,
    getEntity: (state) => state.entity,
  },
});
