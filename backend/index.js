const express = require('express');
const connectDB = require('./config/dbConnect');
const authRoutes = require('./routes/auth');
const app = express();
const cors = require('cors'); // Import the CORS package

require('dotenv').config();

connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

// app.get("/",(res,req)=>{
//     req.send("Hiii");
// }
    
// )

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });

});