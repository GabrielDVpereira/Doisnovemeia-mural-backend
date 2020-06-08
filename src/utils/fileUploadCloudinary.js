const path = require("path");
const cloudinary = require("cloudinary").v2;

const uploadFile = (filename) => {
  return new Promise((resolve, reject) => {
    const photoPath = path.resolve(__dirname, "..", "..", "uploads", filename);

    cloudinary.uploader.upload(photoPath, function (error, result) {
      if (error) reject(error);
      resolve({ photo_url: result.url, photo_id: result.public_id });
    });
  });
};

module.exports = uploadFile;
