const con = require("../config/connection");

// module.exports.listing = async function(req,res){
//     try{

    
       
//         return res.render('listingpage',{
//             title:"Input Page",
            
//         });
//     }catch(err){
//         console.log('ERROR',err);
//         return;
//     }
                
// }

module.exports.show = async function(req,res){


    try{

    con.connect(function(error){
            if(error){
                
                console.log('ERROR',error);
            }

            var sql = "SELECT * FROM StudentRegistration";

            con.query(sql,function(error,result){
                if(error){
                
                    console.log('ERROR',err);
                }
                console.log(result);
            //    res.render('listingpage',{students:result});
            
        return res.render('listingpage',{
            title:"Listing Page",
            students:result
            
        });
            })

    })
            
        
    }catch(err){
        console.log('ERROR',err);
        return;
    }
        


}


module.exports.download = async function(req,res){


    try{

    con.connect(function(error){
            if(error){
                
                console.log('ERROR',error);
            }

            var sql = "SELECT RESUME FROM `StudentRegistration` WHERE id = 1";

            con.query(sql,function(error,result){
                if(error){
                
                    console.log('ERROR',err);
                }
           

                var res = toString(result);

               console.log(res);
          
        
            })

    })
            
        
    }catch(err){
        console.log('ERROR',err);
        return;
    }
        


}