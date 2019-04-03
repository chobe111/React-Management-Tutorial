const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
          {
             'id':1,
             'image' : "https://placeimg.com/64/64/1",
             'name':'조명기',
             'birthday':'980719',
             'gender':'남자',
             'job':'대학생'
             
           },
           {
             'id':2,
             'image' : "https://placeimg.com/64/64/2",
             'name':'파커',
             'birthday':'150819',
             'gender':'남자',
             'job':'강아지'  
           },
           {
             'id':3,
             'image' : "https://placeimg.com/64/64/3",
             'name':'유금석',
             'birthday':'980915',
             'gender':'남자',
             'job':'군인'  
           }
                      
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port} `));