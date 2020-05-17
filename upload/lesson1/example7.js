require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/kitten.jpg', {
    // can diectly add to/create subfolder, before uploading to assets
        public_id: 'cute_animals/cute_cats/kitten'
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));