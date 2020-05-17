// install and call dotenv package
// takes env variables from .env file and passes to Cloudinary for authentication
require('dotenv').config();
// require Cloudinary Node.js software development kit
// declare the latest version of our APIs for this (v2)
// saves you from having to clare the version # in other calls
const cloudinary = require('cloudinary').v2;

console.log(require('dotenv').config());
cloudinary.uploader.upload('assets/images/kitten.jpg')
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error));