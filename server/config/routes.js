var Example = require("../controllers/models.js");

module.exports = function(app){
    //Retrieves all authors
    app.get('/all_products',function(req,res){
        Example.getAllExamples(req,res);
    })

    //creates a new author
    app.post('/new_product',function(req,res){
        Example.createExample(req,res);
    })

    //finds a specific author
    app.get('/find_product/:id',function(req,res){
        Example.getExample(req,res);
    })

    //Updates a specific author
    app.put('/update_product/:id',function(req,res){
        Example.updateExample(req,res);
    })

    app.delete('/delete_product/:id',function(req,res){
        Example.deleteExample(req,res);
    })
} 