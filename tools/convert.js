const json = require("./public/data/sites.json");


function convert(data, id) {

  data["id"] = id++;

  if(data.items && data.items.length) {
    data.items = data.items.map((item) => {
      return convert(item, id++);
    })
  }
  return data;
}

let result = convert(json, 1);

console.log(result);
console.log(JSON.stringify(result));