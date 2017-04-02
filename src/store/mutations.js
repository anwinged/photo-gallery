export default {

  init(state, user) {
    state.user = user;
  },
  
  clear(state) {
    state.user = null;
    state.photos = [];
    state.albums = [];
    state.currentAlbum = null;
    state.currentPhoto = null;
  },
  
  setPhotos(state, photos) {
    state.photos = photos;
  },
  
  changeDirection(state, direction) {
    state.direction = direction;
  },

  setCurrentPhoto(state, photo) {
    state.currentPhoto = photo;
  },
  
};
