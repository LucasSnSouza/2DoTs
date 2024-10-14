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
    },
    wipeDatas(core=null, scene=null, layer=null, entity=null){
      if(core){
        this.core = null;
      }
      else if(scene){
        this.scene = null;
      }
      else if(layer){
        this.layer = null;
      }
      else if(entity){
        this.entity = null;
      }
    }
  },
  getters: {
    getCore: (state) => state.core,
    getScene: (state) => state.scene,
    getLayer: (state) => state.layer,
    getEntity: (state) => state.entity,
  },
});
