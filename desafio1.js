class ProductManager {
    constructor(){
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock ) =>{

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("ERROR: All fields are required")
            return
        }

        const newProduct = {title, description, price, thumbnail, code, stock }
        if(this.products.length === 0 )
            newProduct.id = 1
        else
            newProduct.id = this.products[this.products.length -1].id +1 //ID autoincrementable
        
        //Validacion del campo CODE
        const existingCode = this.products.find(product => product.code === code)
        if (existingCode) {
            console.log(`ERROR: Code ${code} is already in use`)
            return
        }
        this.products.push(newProduct)
    }

    getProducts = () => this.products

    getProductById = (id) => {
        const found = this.products.find(product => product.id === id)
        if(found)
            return found
        else{
            console.log('Not Found')
            return null
        }
    }
}

const manejadorProductos = new ProductManager();
console.log(manejadorProductos.getProducts());
manejadorProductos.addProduct('Producto prueba','Este es un producto de prueba',200,'Sin Imagen','abc123', 25);
console.log(manejadorProductos.getProducts());
manejadorProductos.addProduct('Producto prueba','Este es un producto de prueba',200,'Sin Imagen','abc123', 25);
console.log(manejadorProductos.getProductById(1));
console.log(manejadorProductos.getProductById(2));