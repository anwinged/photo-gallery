import VkGallery from '../services/VkGallery.js';

export default {

  login({ commit }) {
    VkGallery.login().then((u) => {
      console.log(u);
      commit('init', u);
    });
  },

  logout({ commit }) {
    VkGallery.logout().then(() => {
      commit('clear');
    });
  },

  getStatus({ commit }) {
    VkGallery.getStatus().then((u) => {
      commit('init', u);
    });
  },

  getPhotos({ commit }) {
    VkGallery.getPhotos().then((photos) => {
      console.log(photos);
      commit('photos', photos);
    });
  },

}
