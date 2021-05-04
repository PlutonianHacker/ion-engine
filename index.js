const fs = require('fs');
const Template = require('./tmpl.js');
const obj = {
  title: "Hello, world.",
  text: "How do you feel about terraforming?",
  list: {
    item1: { title: "Item 1" },
    item2: { title: "Item 2" },
  },
  person: {
    firstname: "Steve",
    lastname: "Throckmorten",
  },
  condition: true,
  otherCondition: false,
  array: [
    "Steve",
    "Dave",
    "Fred",
  ],
}

try {
  const data = fs.readFileSync('index.html', 'utf8');
  const template = new Template(data, obj);
  template.compile();
} catch(err) {
  console.error(err);
}
