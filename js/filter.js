const mongo_db = require("mongodb");
const MongoClient = mongo_db.MongoClient;

const dbName = 'js279';
const uri = `mongodb+srv://leduybao1410:ilovethu123@cluster0.zfue4.mongodb.net/test`;
// Promise
MongoClient.connect(uri).then(client => {
    console.log(`Kết nối thành công`)
    // Hiển thị các tivi có đơn giá bán nhỏ hơn 10 triệu $lt
    /*
    let filter={
        "Don_gia_Ban":{
            $lt:10000000
        }
    }
    client.db(dbName).collection("tivi").find(filter).toArray().then(result=>{
        console.log(result.length);
        client.close()
    }).catch(err=>{
        console.log(err)
    })
    */

    // Hiển thị các tivi có đơn giá bán lớn hơn 10 triệu $gt
    /*
    let filter={
        "Don_gia_Ban":{
            $gt:10000000
        }
    }
    client.db(dbName).collection("tivi").find(filter).toArray().then(result=>{
        console.log(result.length);
        client.close()
    }).catch(err=>{
        console.log(err)
    })
    */
    // Hiển thị các Tivi có Đơn giá Bán Lớn 10 triệu và Hãng SX là SONY => $and 
    // Sắp xếp Đơn giá Bán tăng dần
    let filter = {
        $and:[
            {
                "Don_gia_Ban":{
                    $gt:10000000
                }
            },
            {
                "Nhom_Tivi.Ma_so":"SONY"
            }
        ]
    }
    let sort={
        "Don_gia_Ban":1
    }
    client.db(dbName).collection("tivi").find(filter).sort(sort).toArray().then(result=>{
        console.log(result);
        client.close()
    }).catch(err=>{
        console.log(err)
    })

}).catch(err => {
    console.log(err)
})




