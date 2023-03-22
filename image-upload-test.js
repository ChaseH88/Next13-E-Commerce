const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "chaseh88",
  api_key: "899273552835847",
  api_secret: "q4aMbQjo-BruzOxOHXbwuDoWwMg",
});

const res = cloudinary.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }
);

res
  .then((data) => {
    console.log("DATA: ", data);
    console.log("Secure URL: ", data.secure_url);
  })
  .catch((err) => {
    console.log(err);
  });

// Generate
const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  Crop: "fill",
});

// The output url
console.log("URL: ", url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
