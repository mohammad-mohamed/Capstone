// import { userRouter, express} from './controller/UserController.js'
// import { productRouter } from './controller/ProductController.js'
// import cors from 'cors'
// import path from 'path'

// // Create an express app
// const app = express()
// const port = +process.env.PORT || 4000
// // Middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Methods", "*");
//     res.header("Access-Control-Request-Methods", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Expose-Headers", "Authorization");

//     next()
// })


// app.use('/user', userRouter)
// app.use('/product', productRouter)
// app.use(
//     express.static('./static'),
//     express.json(),
//     express.urlencoded({
//         extended: true
//     }),
//     cors({
//         origin: '*',
//         credentials:true
//     })
// )

// app.get('^/$|/GameVaults', (req, res) => {
//     res.status(200).sendFile(path.resolve('./static/html/index.html'))
// })

// app.get('*', (req, res) => {
//     res.json({
//         status: 404,
//         msg: 'Resource not found'
//     })
// })

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// })

import { userRouter, express } from './controller/UserController.js';
import { productRouter } from './controller/ProductController.js';
import cors from 'cors';
import path from 'path';

// Create an express app
const app = express();
const port = +process.env.PORT || 4000;

// Middleware
app.use(cors({
    origin: 'http://localhost:8080', // Adjust this to match your frontend's origin
    credentials: true
}));

// Static files, JSON parsing, and URL-encoded data
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Routes
app.use('/user', userRouter);
app.use('/product', productRouter);

// Serve the main HTML file for the base route
app.get('^/$|/GameVaults', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'));
});

// Handle 404 errors
app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
