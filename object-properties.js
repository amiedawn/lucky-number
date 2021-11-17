let website = {
  title: 'JavaScript tutorial',
  url: 'www.google.com',
  tags: ['es', 'javascript', 'node.js']
};

for (const key in website) {
  console.log(website[key]);
}