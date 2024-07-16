let express = require('express');
let bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function(req, res){
    console.log('------------------------------');
    console.log(req);
    console.log('------------------------------');
    res.send('Hello nodejs server');
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})

let port = 8081

app.listen(port, function(){
    console.log('Server running on http://localhost:' + port)
})
app.get('/user/:userId',function (req , res) {
    res.send('เรียกดูข้อมูล ผู้ใช้งานทั้งหมด '+ req.params.userId)
    
})
app.get('/users',function (req , res) {
    res.send('เรียกดูข้อมูล ผู้ใช้งานทั้งหมด ')
       
})

app.post('user/', function(req,res){
    res.send('ทำการสร้างผู้ใช้งาน'+JSON.stringify(req.body))

})

app.put('user/:userId', function(req,res){
    res.send('ทำการแก้ไขผู้ใช้งาน'+req.params.userId + ' : '+JSON.stringify(req.body))
})

app.delete('user/:userId', function (req , res) {
    res.send('ทำการลบผู้ใช้งาน' + req.params.userId + ' : ' +JSON.stringify(req.body))
})

