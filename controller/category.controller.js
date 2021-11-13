const fs = require("fs");
const upload = require("../middleware/upload");

const createCategory = async (req, res) => {
  // await upload(req, res);
  // if (req.files.length <= 0) {
  //   return res.send(`You must select at least 1 file.`);
  // }
  // return res.send(`Files has been uploaded.`);
  try {
    console.log(req.body);
    let usersjson = fs.readFileSync("category.json", "utf-8");
    let currentData = JSON.parse(usersjson);
    let dataToAdd = {
      categoryName: req.body.categoryName,
      images: [],
    };
    currentData.push(dataToAdd);
    let editedJson = JSON.stringify(currentData);
    fs.writeFileSync("category.json", editedJson, "utf-8");
    res.status(200).send("Current JSON already exists");
  } catch (error) {
    console.log(error);
    var dict = [
      {
        categoryName: req.body.categoryName,
        images: [],
      },
    ];
    fs.writeFile("category.json", JSON.stringify(dict), function (err, result) {
      if (err) console.log("error", err);
    });
    //   ${__dirname}
    res.status(200).send("Created new category JSON");
  }
};

const getAllCategories = (req, res) => {
  try {
    let usersjson = fs.readFileSync("category.json", "utf-8");
    let currentData = JSON.parse(usersjson);
    res.status(200).send(currentData);
  } catch (e) {
    res.status(204).send("No categories avaialable");
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
