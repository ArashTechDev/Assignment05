const express = require("express");
const ProductsService = require("../../services/products.service.js");
apiProductRoutes = express.Router();





// PRODUCTS API 
apiProductRoutes.get('/', async (req, res) => {
  const products = await ProductsService.findAll();
  res.json(products);
});


apiProductRoutes.get('/:id', async (req, res) => {
  const products = await ProductsService.findById(req.params.id);
  res.json(products);
});


apiProductRoutes.delete('/:id', async (req, res) => { 

    const id = parseInt(req.params.id); 

    try {
      const deleted = await ProductsService.delete(id);
      if (deleted) {
        return res.json({ message: `Product ${id} was deleted successfully` });
      } 

    } catch (error) {
      return res.json({ message: `Product ${id} was not found and the error is ${error}` });
    }

});

apiProductRoutes.post('/', async (req, res) => {
  const newProduct = await ProductsService.create(req.body);
  res.json(newProduct);
});


module.exports = apiProductRoutes;