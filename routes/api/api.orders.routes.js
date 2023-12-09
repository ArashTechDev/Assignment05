

const express = require("express");

apiOrderRoutes = express.Router();


const OrdersService =require("../../services/orders.service.js");


// ORDERS API 

apiOrderRoutes.get('/', async (req, res) => {
  const orders = await OrdersService.findAll();
  res.json(orders);
});


apiOrderRoutes.get('/:id', async (req, res) => {
  const order = await OrdersService.findById(req.params.id);
  res.json(order);
});

apiOrderRoutes.delete('/:id', async (req, res) => {
     const id = parseInt(req.params.id);
     try {
      const deleted = await OrdersService.delete(id);
      if (deleted) {
        return res.json({ message: `Order ${id} was deleted successfully` });
      } 

    } catch (error) {
      return res.json({ message: `Order ${id} was not found and the error is ${error}` });
    }
});


apiOrderRoutes.post('/', async (req, res) => {
  const newOrder = await OrdersService.create(req.body);
  res.json(newOrder);
});


module.exports = apiOrderRoutes;
