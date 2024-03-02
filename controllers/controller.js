//Routers Ko handle karne kely ya
let GetHome = (req, res) => {
  res.status(200).json({ "message": "this is server home code" });
};

let Getabout = (req, res) => {
  res.status(200).json({ "message": "this is server about code" });
};

let PostHome = (req, res) => {
  console.log(req, body);
  res.status(201).json({ "message": "Succesfully got the data" });
};

let PageNotFound = (req, res) => {
    res.status(404).json({ "message": "Page Not Found  !" });
  }

export { GetHome, PostHome, Getabout, PageNotFound};
