require('express')()
.get('/', (req, res) => {
    return res.send("Hello World");
})
.get('/study', (req, res) =>{
    return res.send("Study")
})
.listen(5500);

