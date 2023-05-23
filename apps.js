class productManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, img, code, stock) {
        for (let i = 0; i < this.products.length;i++){
            if(this.products [i].code == code) {
                console.log(`El codigo ${code} esta repetido`)
                break;
            }
        }

        const newProduct = {          
            title,
            description,
            price,
            img,
            code,
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            productManager.id++
            this.products.push({
                ...newProduct,
                id:productManager.id
            });
        }else{
            console.log("todos los campos son requeridos")
        }


    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("not found") : console.log(this.existe(id));
    }
}

const productos = new productManager 
// Llamada de arreglo vacio 
console.log(productos.getProduct());

//productos
productos.addProduct("titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abc124");

//Llamada de arreglo con productos
console.log(productos.getProduct());

//Validacion de CODE reepetido
productos.addProduct("titulo3", "descripcion3", 1000, "imagen3", "abc124", 7);

//Busqueda de producto por id
productos.getProductById(2)

//busqueda por ID no encontrado
productos.getProductById(3)