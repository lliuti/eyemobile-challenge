import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const upload = () => {
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname, "..", "..", "tmp"),
      filename: function (req, file, callback) {
        const hash = crypto.randomBytes(16).toString("hex");
        const fileName = `${hash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  };
};

export { upload };
