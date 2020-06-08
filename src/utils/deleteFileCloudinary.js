const cloudinary = require("cloudinary").v2;

const deleteFile = (imageId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(imageId, function (error, response) {
      if (error) reject(error);

      resolve();
    });
  });
};

module.exports = deleteFile;
