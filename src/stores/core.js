import { defineStore } from 'pinia';

export const useCore = defineStore('core', {
  state: () => ({
    core: null,
  }),
  actions: {
    fetchCore(data){
        this.core = data;
    }
  },
  getters: {
    getCore: (state) => state.core,
  },
});
