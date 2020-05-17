require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// don't include the file extension in the Public ID name unless it's a raw file
cloudinary.uploader.upload('assets/images/kitten.jpg', {
        public_id: 'kitten'
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));