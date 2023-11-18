const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Routes/userRoute')
const billRoute = require('./Routes/billRoute')
const bankRoute = require('./Routes/bankRoute')
const customerRoute = require('./Routes/customerRoute')
const productRoute = require('./Routes/productRoute')
const incomeRoute = require('./Routes/incomeRoute')

const cors = require('cors')

require('dotenv/config')

const app = express()
// middleware
app.use(express.json())
app.use(cors())
// default
app.get('/',(req,res)=>{
    res.send('user info')
})
// main
app.use('/api/user',userRoute)
app.use('/api/bill',billRoute)
app.use('/api/bank',bankRoute)
app.use('/api/customer',customerRoute)
app.use('/api/product',productRoute)
app.use('/api/income',incomeRoute)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()

app.listen(process.env.PORT || 5000) 