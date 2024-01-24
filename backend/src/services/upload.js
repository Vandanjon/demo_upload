const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const storage = multer({ dest: "./public/uploads/" });

const uploadService = storage.single("avatar");

const handleFileUpload = (req, res) => {
  const { originalname, filename } = req.file;

  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${uuidv4()} - ${originalname}`,
    (err) => {
      if (err) {
        throw err;
      }
      res.send("File renamed and uploaded");
    }
  );
};

module.exports = { uploadService, handleFileUpload };
