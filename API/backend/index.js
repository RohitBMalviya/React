import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (request, response) => {
  response.send("rohit");
});
app.get("/api/product", (request, response) => {
  const product = [
    {
      id: 1,
      name: "Bag",
      description: "Product descriptions",
    },
    {
      id: 2,
      name: "Bottle",
      description: "Product descriptions",
    },
    {
      id: 3,
      name: "Chair",
      description: "Product descriptions",
    },
    {
      id: 4,
      name: "Door",
      description: "Product descriptions",
    },
    {
      id: 5,
      name: "Lamp",
      description: "Product descriptions",
    },
    {
      id: 6,
      name: "Laptop",
      description: "Product descriptions",
    },
    {
      id: 7,
      name: "Notebook",
      description: "Product descriptions",
    },
    {
      id: 8,
      name: "Pen/Pencil",
      description: "Product descriptions",
    },
    {
      id: 9,
      name: "Phone",
      description: "Product descriptions",
    },
    {
      id: 10,
      name: "Table",
      description: "Product descriptions",
    },
    {
      id: 11,
      name: "Water",
      description: "Product descriptions",
    },
    {
      id: 12,
      name: "Wood",
      description: "Product descriptions",
    },
  ];

  if (request.query.search) {
    const search = request.query.search;
    const newProduct = product.filter((product) =>
      product.name.includes(search)
    );
    response.send(newProduct);
    return;
  }
  setTimeout(() => {
    response.send(product);
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`the server is run on port -> http://localhost:${PORT}`);
});
