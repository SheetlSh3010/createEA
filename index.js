const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const employeeRoute = require('./routes/employeeRoutes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to  employee app Backend</h1>")
})
app.use('/api/auth', authRoute);
app.use('/api/employees', employeeRoute);


const port = process.env.PORT || 4800;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});