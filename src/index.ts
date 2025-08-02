import express, {json, urlencoded} from "express";
import productsRoutes from "./routes/products/products.routes";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// application routes
app.use("/products", productsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});