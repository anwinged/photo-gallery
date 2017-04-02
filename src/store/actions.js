import VkGallery from '../services/VkGallery.js';

export default {

  async initApplication({ commit, dispatch }) {
    await dispatch('getStatus');
    await dispatch('getPhotos');
  },

  async login({ commit, dispatch }) {
    commit('init', await VkGallery.login());
    await dispatch('getPhotos');
  },

  async logout({ commit }) {
    await VkGallery.logout();
    commit('clear');
  },

  async getStatus({ commit }) {
    commit('init', await VkGallery.getStatus());
  },

  async getPhotos({ commit }) {
    commit('setPhotos', await VkGallery.getPhotos());
  },

  selectPhoto({ commit, state }, photo) {
    const founded = state.photos.find(p => p.src === photo.src);
    if (founded) {
      commit('setCurrentPhoto', founded);
    }
  },

  dropSelection({ commit }) {
    commit('setCurrentPhoto', null);
  },

  goToNextPhoto({ commit, state, getters }) {
      const current = state.currentPhoto;
      if (current === null) {
        return;
      }

      const photos = getters.orderedPhotos;
      const currentIndex = photos.findIndex(p => p.src === current.src);
      const count = photos.length;
      commit('setCurrentPhoto', photos[(currentIndex + 1) % count]);
  },

}
