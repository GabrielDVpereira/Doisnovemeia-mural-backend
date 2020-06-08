const cloudinary = require("cloudinary").v2;

const deleteFile = (imageId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(imageId, function (error, response) {
      if (response.result == "ok") {
        resolve();
      } else {
        reject("Unable to delete file from cloudinary");
      }
    });
  });
};

module.exports = deleteFile;
