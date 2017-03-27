export default {
  init(state, user) {
    state.user = user;
  },
  
  clear(state) {
    state.user = null;
    state.photos = [];
    state.albums = [];
    state.current_album = null;
  },
  
  photos(state, photos) {
    state.photos = photos;
  },
  
  direction(state, direction) {
    state.direction = direction;
  },
};
