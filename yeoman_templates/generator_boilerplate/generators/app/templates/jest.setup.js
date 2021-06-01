global.fetch = require('jest-fetch-mock');
window.tinymce = {
  get: () => {
    return {getContent: () => {}};
  }
};
window.matchMedia = window.matchMedia || (() => {
  return {
    matches: false, addListener: () => {
    }, removeListener: () => {
    },
  };
});




