import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/product-component/product.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-logic',
  templateUrl: './product-logic.component.html',
  styleUrls: ['./product-logic.component.css']
})
export class ProductLogicComponent  {
   status:Array<string>=[];
header=['ProductId','ProductName','Category','Manufacturer',
'Description', 'Price']
registerForm: FormGroup;
 ListOfProducts:Array<Product>;

    constructor(private formBuilder: FormBuilder){
        this.ListOfProducts=[
            new Product(1,"Car 1","Automobile","BMW","The best brand acccross the globe",100003),
            new Product(2,"Car 2","Automobile","BMW","The best brand acccross the globe",100001),
            new Product(3,"Car 3","Automobile","BMW","The best brand acccross the globe",100002),
            new Product(4,"Car 4","Automobile","BMW","The best brand acccross the globe",100000),
    ];
    this.registerForm = this.formBuilder.group({
      ProductId:null,
      ProductName:null,
      Category:null,
      Manufacturer:null,
      Description:null,
      Price:null
	 });
    }
    OnSort(){
      this.ListOfProducts.sort((a, b) =>
      (a.Price > b.Price) ? 1 :
        ((b.Price > a.Price) ? -1 :
          0));
      console.log( JSON.stringify(this.ListOfProducts));
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
                this.status.push("Enter unique productId");
            }
            })
            if(!(typeof(product.ProductName) === typeof("any String")))
            {
                isProductValid=false;
                this.status.push("Enter valid product name string");
            }
            if(!(typeof(product.Category) === typeof("any String")))
            {
                isProductValid=false;
                this.status.push("Enter valid category string");
            }
            if(!(typeof(product.Manufacturer) === typeof("any String")))
            {
                isProductValid=false;
                this.status.push("Enter valid manufacturer string");
            }
            if(product.Description.length < 50)
            {
                isProductValid=false;
                this.status.push("Description should be more than 50 characters");
            }
            if(product.Price<0)
            {
                isProductValid=false;
                this.status.push("Price value should be grater than 0");
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

    AddNewProduct():void{
        var product=new Product(this.registerForm.get('ProductId').value,
        this.registerForm.get('ProductName').value,
        this.registerForm.get('Category').value,
        this.registerForm.get('Manufacturer').value,
        this.registerForm.get('Description').value,
        this.registerForm.get('Price').value);
       if(this.ValidateProduct(product))
       {
        this.status.push("Pushing product in array");
        this.ListOfProducts.push(product);
       }        
    }

    

}
