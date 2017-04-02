import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

import { ORDER_LIKE, ORDER_TIME } from './directions.js';

const store = new Vuex.Store({
  state: {
    user: null,
    photos: [],
    albums: [],
    currentAlbum: null,
    currentPhoto: null,
    direction: ORDER_LIKE,
  },  
  getters: {
    orderedPhotos(state) {
      if (state.direction === ORDER_TIME) {
        return state.photos.sort((x, y) => y.timestamp - x.timestamp);
      } else if (state.direction === ORDER_LIKE) {
        return state.photos.sort((x, y) => y.likes - x.likes);
      } else {
        return state.photos;
      }
    },
  },
  mutations,
  actions,
});

export default store;
