export class Product{
       
    constructor(public ProductId:number,public ProductName:string,public Category:string,public Manufacturer:string,
        public Description:string,public Price:number){       
        }
}

export class ProductLogic{
    ListOfProducts:Array<Product>;
    constructor(){
        this.ListOfProducts=[
            new Product(1,"Car 1","Automobile","BMW","The best brand acccross the globe",100000),
            new Product(2,"Car 2","Automobile","BMW","The best brand acccross the globe",100000),
            new Product(3,"Car 3","Automobile","BMW","The best brand acccross the globe",100000),
            new Product(4,"Car 4","Automobile","BMW","The best brand acccross the globe",100000),
    ];
    }

    GetAllProducts() :Array<Product>{
        console.log(this.ListOfProducts);
        return this.ListOfProducts;
    }

    GetProductByCategoryOrManufacturer(category:string, manufacturer:string): Product{
        this.ListOfProducts.forEach((u,i)=>{
            if(u.Category === category || u.Manufacturer===manufacturer)
            {
                console.log(u);
                return u;
            }
        })
       return null;
    }

    ValidateProduct(product:Product):boolean{
         let isProductValid = true;
         this.ListOfProducts.forEach((u,i)=>{
            if(u.ProductId===product.ProductId)
            {
                isProductValid=false;
                console.log("Enter unique productId");
            }
            })
            if(!(typeof(product.ProductName) === typeof("any String")))
            {
                isProductValid=false;
                console.log("Enter valid product name string");
            }
            if(!(typeof(product.Category) === typeof("any String")))
            {
                isProductValid=false;
                console.log("Enter valid category string");
            }
            if(!(typeof(product.Manufacturer) === typeof("any String")))
            {
                isProductValid=false;
                console.log("Enter valid manufacturer string");
            }
            if(product.Description.length < 50)
            {
                isProductValid=false;
                console.log("Description should be more than 50 characters");
            }
            if(product.Price<0)
            {
                isProductValid=false;
                console.log("Price value should be grater than 0");
            }
return isProductValid;
    }

    UpdateProduct(product :Product){
        this.ListOfProducts.map(x => {
            if(x.ProductId === product.ProductId){
                
                x.Category=product.Category;
                x.Description=product.Category;
                x.Manufacturer=product.Manufacturer;
                x.Price=product.Price;
                x.ProductName=product.ProductName;
                console.log("Updated "+x.ProductId)
            }
        });
    }

    DeleteProduct(product:Product)
    {
        this.ListOfProducts.forEach((u,i)=>{
            if(u.ProductId === product.ProductId)
            {
                console.log("delteing "+u.ProductId);
                this.ListOfProducts.splice(i,1);
            }
        })
    }

    AddNewProduct(product:Product):void{
        
       if(this.ValidateProduct(product))
       {
        console.log("Pushing product in array");
        this.ListOfProducts.push(product);
       }        
    }

    SaveAllProducts(products:Array<Product>){
        for(let product of products)
        {
            this.AddNewProduct(product);
        }
    }
}

let productLogic = new ProductLogic();
productLogic.AddNewProduct(new Product(5,"Car 5","Automobile","BMW","The best brand kjgkjkg bfjbghjrw bjebgghjbtg erbhjwbegjkgebr kfejbgkhbgkj jhbghbehjbe",100000));
productLogic.DeleteProduct(productLogic.ListOfProducts[4]);
productLogic.GetAllProducts();
productLogic.GetProductByCategoryOrManufacturer("Automobile","BMW");
productLogic.SaveAllProducts([
    new Product(5,"Car 5","Automobile","BMW","The best brand acccross the globe.The best brand acccross the globe.The best brand acccross the globe",100000),
    new Product(6,"Car 6","Automobile","BMW","The best brand acccross the globeThe best brand acccross the globe. The best brand acccross the globe",100000)
]);
productLogic.UpdateProduct(new Product(6,"Updated car","AutoMobile","BMW","The best brand acccross the globeThe best brand acccross the globe. The best brand acccross the globe",100000));
