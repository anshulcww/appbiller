const express = require('express');
const router = express.Router();

const Table = require('../models/tables');
const Customer = require('../models/customers');
const Menu = require('../models/menus');
//retrieving tables
router.get('/tables', (req, res, next) => {
    Table.find(function(err, tables){
        res.json(tables);
    })
});
router.get('/customers', (req, res, next) =>{
    Customer.find(function(err, customers){
        res.json(customers);
    })
})
router.get('/customers/:_id', (req, res, next) =>{
    Customer.findById(req.params._id, function(err, customer){
        if (err) return next(err);
        res.json(customer);
    })
})
router.get('/menus/:_id', (req, res, next) =>{
    Menu.findById(req.params._id, function(err, menu){
        if (err) return next(err);
        res.json(menu);
    })
})

router.get('/menus', (req, res, next) =>{
    Menu.find(function(err, menus){
        res.json(menus);
    })
})

//add table
router.post('/tables', (req, res, next) =>{
    //logic to add contact
    let newTable = new Table({
        tablename: req.body.tablename
    });
    newTable.save((err, table) => {
        if(err){
            res.json({msg: " failed to add tables"});
        }else{
            res.json({msg: 'Table added succesfully'});
            console.log(newTable);
        }
    });
});

router.post('/menus', (req, res, next) =>{
    //logic to add menu
    let newMenu = new Menu({
        menuname: req.body.menuname,
        quantity: req.body.quantity,
        rate: req.body.rate,
    });
    newMenu.save((err, menu) => {
        if(err){
            res.json({msg: " failed to add menu"});
        }else{
            res.json({msg: 'Menu added succesfully'});
            console.log(newMenu);
        }
    });
});


//delete contacts
router.delete('/tables/:id', (req, res, next) => {
    //logic to add contact
    Table.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json({result});
        }
    })
});

//add Customer details
router.post('/customers', (req, res, next) =>{
    let newCustomer = new Customer({
        
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });
    
    newCustomer.save((err, customer) => {
        if(err){
            res.json({msg: "failed to add Customer"});
        }else{
            res.json(customer);
        }
    })
})
module.exports = router;