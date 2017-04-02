import VkGallery from '../services/VkGallery.js';

export default {

  async initApplication({ commit, dispatch }) {
    await dispatch('getStatus');
    await Promise.all([
      dispatch('getPhotos'),
      dispatch('getAlbums'),
    ]);
  },

  async login({ commit, dispatch }) {
    commit('init', await VkGallery.login());
    await Promise.all([
      dispatch('getPhotos'),
      dispatch('getAlbums'),
    ]);
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

  async getAlbums({ commit }) {
    commit('setAlbums', await VkGallery.getAlbums());
  },

  async getAlbumPhotos({ commit }, albumId) {
    commit('setPhotos', await VkGallery.getAlbumPhotos(albumId));
  },

  async selectAlbum({ commit, state, dispatch }, albumId) {
    const founded = state.albums.find(a => a.id === albumId);
    if (founded) {
      commit('setCurrentAlbum', founded);
    }
    await dispatch('getAlbumPhotos', albumId);
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
