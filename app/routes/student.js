var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/std-reg',function(req,res){
      const {name,uid,pwd,gender,hobbies,country,address}=req.body;

     let connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'school',
            port:3306
      })

      connection.connect(function(err,succ){ //checking weather con is succes or fail
            if(err){
                  res.send("db connection failed");
            }else{
                  var q=`insert into student(NAME,UID,PWD,GENDER,HOBBIES,COUNTRY,ADDRESS) values("${name}","${uid}","${pwd}","${gender}","${hobbies}","${country}","${address}")`;
                  connection.query(q,function(e,s){
                         if(e){
                               res.send(e);
                         }else{
                               res.send(s);
                         }
                  })
            }
      })
})

router.post('/std-fees',function(req,res){
    const {name,uid,classes,fees} = req.body;
    
    let con=mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'',
          database:'school',
          port:3306
    })

    con.connect(function(err,succ){
         if(err){
               res.send("db connection failed");
         }else{
               var q=`insert into fees(name,uid,classes,fees) values("${name}","${uid}","${classes}","${fees}")`;
               con.query(q,function(e,s){
                    if(e){
                          res.send(e);
                    }
                    else{
                          res.send(s);
                    }
               })
         }
    })

})

router.get('/std-fee-data',function(req,res){
        let con=mysql.createConnection({
              host:'localhost',
              user:'root',
              password:'',
              database:'school',
              port:3306
        })

      con.connect(function(e,s){
            if(e){
                  res.send('db conn error')
            }else{
                  let q=`select * from fees`;
                  con.query(q,function(e,s){
                        if(e){
                              res.send(e);
                        }else{
                              res.send(s);
                        }
                  })
            }
      })
})

router.post('/std-fee-update',function(req,res){
      const {name,uid,classes,fees,id} = req.body;

      let con=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'school',
            port:3306
      })

      con.connect(function(e,s){
          if(e){
                res.send('db conn error')
          }else{
                let q=`UPDATE fees SET name='${name}',uid='${uid}',classes='${classes}',fees='${fees}' WHERE id='${id}' `;
                con.query(q,function(e,s){
                      if(e){
                            res.send(e);
                      }else{
                            res.send(s);
                      }
                })
          }
      })
})


router.post('/std-marks',function(req,res){
      const {name,marks,percentage,terms} = req.body;
      
      let conn=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'school',
            port:3306
      })
  
      conn.connect(function(err,succ){
           if(err){
                 res.send("db connection failed");
           }else{
                 let q=`insert into marks(name,marks,percentage,terms) values("${name}","${marks}","${percentage}","${terms}")`;
                 conn.query(q,function(e,s){
                      if(e){
                            res.send(e)
                      }
                      else{
                            res.send(s);
                      }
                 })
           }
      })
  
  })
  

router.get('/std-data',function(req,res){
    let con = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'',
          database:'school',
          port:3306
    })

    con.connect(function(e,s){
          if(e){
                res.send(e);
          }else{
                let q="select * from student";
                con.query(q,function(e,s){
                    if(e){
                          res.send(e);
                    }else{
                          res.send(s);
                    }
                })
          }
    })

})


router.post('/std-update',function(req,res){

      const {name,uid,pwd,gender,hobbies,country,address,id}=req.body;

      let con=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'school',
            port:3306
      })

      con.connect(function(e,s){
          if(e){
                res.send('db connection error')
          }else{
                let q=`UPDATE student SET name='${name}',uid='${uid}',pwd='${pwd}',gender='${gender}',hobbies='${hobbies}',country='${country}',address='${address}' WHERE id=${id}`;
                con.query(q,function(e,s){
                      if(e){
                            res.send(e)
                      }else{
                            res.send(s)
                      }
                })
          }
      })
})


router.get('/std-delete',function(req,res,next){
      let id = req.query.id;

      let con=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'school',
            port:3306
      })

      con.connect(function(e,s){
            if(e){
                  res.send(e)
            }else{
                  let q=`DELETE FROM student WHERE id=${id}`;
                  con.query(q,function(e,s){
                        if(e){
                              res.send(e)
                        }else{
                              res.send(s)
                        }
                  })
            }
      })
})

router.get('/fee-delete',function(req,res){
     let id =req.query.id;

     let con=mysql.createConnection({
           host:'localhost',
           user:'root',
           password:'',
           database:'school',
           port:3306
     })

     con.connect(function(e,s){
          if(e){
                res.send('db conn error');
          }else{
                let q=`delete from fees where id='${id}' `;
                con.query(q,function(e,s){
                    if(e){
                          res.send(e);
                    }else{
                          res.send(s);
                    }
                })
          }
     })
})

module.exports = router;



//things to send to the client site guy

//url:http://localhost:2020/std/std-reg
//method:post


// input={
//       "name":"s1",
//       "uid":"u2",
//       "pwd":"sed",
//       "gender":"M",
//       "hobbies":"FB",
//       "country":"USA",
//       "address":"punjab"
//     }


// output={
//       "fieldCount": 0,
//       "affectedRows": 1,
//       "insertId": 3,
//       "serverStatus": 2,
//       "warningCount": 0,
//       "message": "",
//       "protocol41": true,
//       "changedRows": 0
//       }