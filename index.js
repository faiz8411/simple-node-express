const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


const port = 5000


app.get('/', (req, res) => {
    res.send('hello from 2nd node exisiint bangladesh autu kjamakha')
})
const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: "+55356261" },
    { id: 1, name: 'sabnoor', email: 'sabana@gmail.com', phone: "+55356261" },
    { id: 2, name: 'sanavhai', email: 'sabana@gmail.com', phone: "+55356261" },
    { id: 3, name: 'sushmita', email: 'sabana@gmail.com', phone: "+55356261" },
    { id: 4, name: 'soniy', email: 'sabana@gmail.com', phone: "+55356261" },
    { id: 5, name: 'saffcbana', email: 'sabana@gmail.com', phone: "+55356261" },

];
const pleyers = [
    { id: 0, name: 'sakib', email: 'sakib@gmail.com', phone: "0162923646" },
    { id: 1, name: 'mush', email: 'mushakib@gmail.com', phone: "0162923646" },
    { id: 2, name: 'akib', email: 'akib@gmail.com', phone: "0162923646" },
    { id: 3, name: 'rakkib', email: 'rakib@gmail.com', phone: "0162923646" },
]


app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.send(JSON.stringify(newUser))
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

// app.get('/fruits', (req, res) => {
//     res.send('mango my faviorate')
// })

// app.get('/fruits/magoes/fazli', (req, res) => {
//     res.send('yammi yammi tok tok fazli')
// })

// pleyer 
app.get('/pleyers', (req, res) => {
    const search = req.query.search
    if (search) {
        const pleyersResult = pleyers.filter(pleyer => pleyer.name.toLowerCase().includes(search))
        res.send(pleyersResult)
    }
    else {
        res.send(pleyers)
    }
})

app.post('/pleyers', (req, res) => {
    const newPleyer = req.body
    newPleyer.id = pleyers.length
    pleyers.push(newPleyer)
    console.log('hitting the post pleyers', req.body)
    res.send(JSON.stringify(newPleyer))
})
app.get('/pleyers/:id', (req, res) => {
    const id = req.params.id
    const pleyer = pleyers[id]
    res.send(pleyer)
})

app.listen(port, () => {
    console.log('hello listening from port', port)
})
