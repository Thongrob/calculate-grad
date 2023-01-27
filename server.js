const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const routeIndex = require('./routes/calRoute');


//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Test router
// app.get('/', (req, res) => {
//     res.json({
//         message: "Hello, This is message from server."
//     })
// })

app.use('/API', routeIndex);

const port = 5500;
app.listen(port, () => console.log(`Server is starting at port: ${port}`));