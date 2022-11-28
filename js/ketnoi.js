const mongo_db= require("mongodb");
const MongoClient= mongo_db.MongoClient;

const dbName = 'js279';
const uri = `mongodb+srv://leduybao1410:ilovethu123@cluster0.zfue4.mongodb.net/test`;
// Promise
MongoClient.connect(uri).then(client=>{
    console.log(`Kết nối thành công`)
    client.close() 

}).catch(err=>{
    console.log(err)
})

// CallBack
/*
MongoClient.connect(uri,(err,client)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Kết nối thành công`)
    client.close() 
    }
})
*/


