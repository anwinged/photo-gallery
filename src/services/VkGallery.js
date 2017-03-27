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
        console.log('login', answer);
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
        console.log(answer);
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
            resolve(answer.response.slice(1).map(p => { 
              return { 
                src: p.src_big,
                src_large: p.src_xxbig,
                comment: p.text,
                likes: p.likes.count,
                timestamp: p.created,
              }; 
            }));
          } else {
            reject(answer);
          }
      });     
    })
  }
}

export default new VkGallery();
