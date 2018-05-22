var Example = require("../models/model.js");

module.exports = {

    //Gets all authors.
    getAllExamples: function(req,res){
        Example.find({},function(err,examples){
            result = {}
            if(err){
                result['status'] = false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['products'] = examples;
            }
            res.json(result);
        })
    },
    //Creates an Author.
    createExample: function(req,res){
        var example = new Example({
            id:req.body.id,
            name:req.body.name,
            quantity:req.body.quantity,
            price:req.body.price
        })
        
        if(req.body.name == "undefined"){
            res.json({'status':false,'body':"This is a required field."});
        } else {
            Example.findOne({name:req.body.name},function(err,example2){
                console.log(err);
                console.log(example2);
                if(example2 == null){
                    console.log("I didn't find the example.")
                    example.save({runValidators:true},function(err){
                        var result = {};
                        if(err){
                            result['status']=false;
                            result['body'] = err;
                        } else {
                            result['status'] = true;
                            result['body'] = example;
                        }
                        res.json(result);
                    })
                } else {
                    res.json({'status':false,'body':"The auathor already exists!"});
                }
                
            })
        }
               
    },
    //Get a single author.
    getExample: function(req,res){
       console.log(req.params.id);
        Example.findOne({id:req.params.id},function(err,example){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['product'] = example;
            }
            console.log("RESULT IS>>> ")
            console.log(result);
            res.json(result);
        });
        
    },
    updateExample:function(req,res){
        var hasUpdated = false;
        Example.findOne({id:req.body.id},function(err,exampleRes){
            console.log(req.body.price)
            if(exampleRes != null){
                console.log(exampleRes.name);
                console.log(req.body.name);
                if(exampleRes.name === req.body.name){
                    Example.update({id:req.params.id},req.body,{runValidators:true},function(err,example){
                        
                        result = {};
                        if(err){
                            result['status']=false;
                            result['body'] = err;

                        } else {
                            console.log("I updated!!!");
                            result['status'] = true;
                            result['product'] = example;
                        }
                        hasUpdated = true;
                        console.log(hasUpdated);
                        res.json(result);
                        
                    })
                    
                } else {
                    console.log("I found errs when I looked for THE PET");
                    console.log("I haven't updated!")
                    Example.findOne({name:req.body.name},function(err,exampleRes){
                        if(exampleRes == null){
                            Example.update({id:req.params.id},req.body,{runValidators:true},function(err,example){
                                result = {};
                                if(err){
                                    result['status']=false;
                                    result['body'] = err;
                                } else {
                                    result['status'] = true;
                                    result['product'] = example;
                                }
                                res.json(result);
                            })
                        } else {
                            res.json({'status':false,'unique':"The name already exists!"});
                        }
                        
                    });
                }
            }
            
        });
        
    },
    //delete an author.
    deleteExample:function(req,res){
        Example.findOneAndRemove({id:req.params.id},function(err,example){
            result = {};
            if(err){
                result['status']=false;
                result['body'] = err;
            } else {
                result['status'] = true;
                result['example'] = example; //returns the original author back.
            }
            res.json(result);
        });
    },    

}