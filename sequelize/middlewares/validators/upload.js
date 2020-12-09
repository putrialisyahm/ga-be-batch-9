const multer = require("multer"); //multipar form-data
const path = require("path"); // to detect path of directory
const crypto = require("crypto"); // to encrypt something

const uploadDir = "/img/"; // make images upload to /img/
const storage = multer.diskStorage({
  destination: "../../public/img" + uploadDir, // make images upload to /public/img/
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString("hex") + path.extname(file.originalname)); // encrypt filename and save it into the /public/img/ directory
    });
  },
});

const upload = multer({ storage: storage, dest: uploadDir }); // if we want to upload an image we can use it!

module.exports = upload;
