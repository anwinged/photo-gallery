const PHOTOS_MASK = 4;

class VkGallery
{
  user_id = null;

  constructor() {
      VK.init({
        apiId: 5948071,
        status: false,
      });
  }

  login() {
    return new Promise((resolve, reject) => {
      const onSuccess = (answer) => {
        if (answer.session && answer.status === 'connected') {
          this.user_id = answer.session.mid;
          resolve(answer.session.mid);
        } else {
          reject(answer);
        }
      };
      VK.Auth.login(onSuccess, PHOTOS_MASK);        
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      VK.Auth.logout((answer) => {
        if (answer.status === 'unknown') {
          this.user_id = null;
          resolve();
        } else {
          reject(answer);
        }
      }); 
    });   
  }

  getStatus() {
    return new Promise((resolve, reject) => {
      VK.Auth.getLoginStatus((answer) => {
        if (answer.session && answer.status === 'connected') {          
          this.user_id = answer.session.mid;
          resolve(answer.session.mid);
        } else {
          reject(answer);
        }
      })
    })
  }

  getPhotos(count = 50) {
    return new Promise((resolve, reject) => {
      if (this.user_id === null) {
        reject();
      }
      const params = { owner_id: this.user_id, extended: 1, skip_hidden: 1, count };
      VK.Api.call('photos.getAll', params, (answer) => {
          if (answer.response) {
            resolve(answer.response.slice(1).map(p => this._createPhoto(p)));
          } else {
            reject(answer);
          }
      });     
    });
  }

  getAlbums(count = 3) {
    return new Promise((resolve, reject) => {
      if (this.user_id === null) {
        reject();
      }
      const params = { owner_id: this.user_id, need_system: 0, count };
      VK.Api.call('photos.getAlbums', params, (answer) => {
        if (answer.response) {
          resolve(answer.response.map(a => this._createAlbum(a)));
        }
      });
    });
  }

  getAlbumPhotos(albumId, count = 50) {
    return new Promise((resolve, reject) => {
      if (this.user_id === null) {
        reject();
      }
      const params = { owner_id: this.user_id, album_id: albumId, extended: 1, rev: 1, count };
      VK.Api.call('photos.get', params, (answer) => {
        if (answer.response) {
          resolve(answer.response.map(p => this._createPhoto(p)));
        } else {
          reject(answer);
        }
      });
    });
  }

  _createAlbum(a) {
    return {
      id: a.aid,
      title: a.title,
    };
  }

  _createPhoto(p) {
    return { 
      src: p.src_big,
      src_large: p.src_xbig,
      comment: p.text,
      likes: p.likes.count,
      timestamp: p.created,
    }; 
  }
}

export default new VkGallery();
