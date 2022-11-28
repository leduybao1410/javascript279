const mongo_db = require("mongodb");
const MongoClient = mongo_db.MongoClient;

const dbName = 'js279';
const uri = `mongodb+srv://leduybao1410:ilovethu123@cluster0.zfue4.mongodb.net/test`;
// Promise
MongoClient.connect(uri).then(client => {
    console.log(`Kết nối thành công`)
    // Đọc tất cả điện thoại trong collection mobile find() -> toArray()
    /*
    client.db(dbName).collection("mobile").find().toArray().then(result=>{
        console.log(result)
        client.close() 
    }).catch(err=>{
        console.log(err)
    })
    */
    // Đọc cửa hàng findOne -> object
    /*
    client.db(dbName).collection('tivi').findOne().then(obj => {
        console.log(obj)
        client.close()
    }).catch(err => {
        console.log(err)
    })
    */
    // Đọc tất cả điện thoại trong collection mobile theo nhóm iphone find() -> toArray()
    /*
    let filter={
        "Nhom_Dien_thoai.Ma_so":"IPHONE"
    }
    client.db(dbName).collection("mobile").find(filter).toArray().then(result=>{
        console.log(result.length)
        client.close() 
    }).catch(err=>{
        console.log(err)
    })
    */
    // Đọc điện thoại trong collection mobile có mã số là IPHONE_1 find() -> toArray()
    let filter = {
        "Ma_so": "IPHONE_100"
    }
    /*
    client.db(dbName).collection("mobile").find(filter).toArray().then(result => {
        console.log(result.length)
        client.close()
    }).catch(err => {
        console.log(err)
    })
    */
    // Đọc điện thoại trong collection mobile có mã số là IPHONE_1 findOne() -> object
    client.db(dbName).collection("mobile").findOne(filter).then(result => {
        console.log(result)
        client.close()
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})




