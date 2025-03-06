const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRouter = require('./routers/client_router'); 
const loanRouter = require('./routers/loan_router');
const appliedLoan = require('./routers/apply_loan_router');
const loanRestructuringRouter = require('./routers/loan_restructuring_router');
require('dotenv').config()

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 4071;


const app = express();
mongoose.connect(DB_URL)
    .then(() => {
        console.log('The MongoDB has connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/v1/clients', clientRouter);
app.use('/api/v1/loan', loanRouter);
app.use('/api/v1/appliedloan', appliedLoan);
app.use('/api/v1/loan_restructuring_router', loanRestructuringRouter);

app.listen(PORT, () => {
    console.log("The server is running at port:", PORT);
});