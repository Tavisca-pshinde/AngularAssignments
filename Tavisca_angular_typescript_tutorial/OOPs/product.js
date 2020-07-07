"use strict";
exports.__esModule = true;
exports.ProductLogic = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Manufacturer, Description, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
    }
    return Product;
}());
exports.Product = Product;
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.ListOfProducts = [
            new Product(1, "Car 1", "Automobile", "BMW", "The best brand acccross the globe", 100000),
            new Product(2, "Car 2", "Automobile", "BMW", "The best brand acccross the globe", 100000),
            new Product(3, "Car 3", "Automobile", "BMW", "The best brand acccross the globe", 100000),
            new Product(4, "Car 4", "Automobile", "BMW", "The best brand acccross the globe", 100000),
        ];
    }
    ProductLogic.prototype.GetAllProducts = function () {
        console.log(this.ListOfProducts);
        return this.ListOfProducts;
    };
    ProductLogic.prototype.GetProductByCategoryOrManufacturer = function (category, manufacturer) {
        this.ListOfProducts.forEach(function (u, i) {
            if (u.Category === category || u.Manufacturer === manufacturer) {
                console.log(u);
                return u;
            }
        });
        return null;
    };
    ProductLogic.prototype.ValidateProduct = function (product) {
        var isProductValid = true;
        this.ListOfProducts.forEach(function (u, i) {
            if (u.ProductId === product.ProductId) {
                isProductValid = false;
                console.log("Enter unique productId");
            }
        });
        if (!(typeof (product.ProductName) === typeof ("any String"))) {
            isProductValid = false;
            console.log("Enter valid product name string");
        }
        if (!(typeof (product.Category) === typeof ("any String"))) {
            isProductValid = false;
            console.log("Enter valid category string");
        }
        if (!(typeof (product.Manufacturer) === typeof ("any String"))) {
            isProductValid = false;
            console.log("Enter valid manufacturer string");
        }
        if (product.Description.length < 50) {
            isProductValid = false;
            console.log("Description should be more than 50 characters");
        }
        if (product.Price < 0) {
            isProductValid = false;
            console.log("Price value should be grater than 0");
        }
        return isProductValid;
    };
    ProductLogic.prototype.UpdateProduct = function (product) {
        this.ListOfProducts.map(function (x) {
            if (x.ProductId === product.ProductId) {
                x.Category = product.Category;
                x.Description = product.Category;
                x.Manufacturer = product.Manufacturer;
                x.Price = product.Price;
                x.ProductName = product.ProductName;
                console.log("Updated " + x.ProductId);
            }
        });
    };
    ProductLogic.prototype.DeleteProduct = function (product) {
        var _this = this;
        this.ListOfProducts.forEach(function (u, i) {
            if (u.ProductId === product.ProductId) {
                console.log("delteing " + u.ProductId);
                _this.ListOfProducts.splice(i, 1);
            }
        });
    };
    ProductLogic.prototype.AddNewProduct = function (product) {
        if (this.ValidateProduct(product)) {
            console.log("Pushing product in array");
            this.ListOfProducts.push(product);
        }
    };
    ProductLogic.prototype.SaveAllProducts = function (products) {
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            this.AddNewProduct(product);
        }
    };
    return ProductLogic;
}());
exports.ProductLogic = ProductLogic;
var productLogic = new ProductLogic();
productLogic.AddNewProduct(new Product(5, "Car 5", "Automobile", "BMW", "The best brand kjgkjkg bfjbghjrw bjebgghjbtg erbhjwbegjkgebr kfejbgkhbgkj jhbghbehjbe", 100000));
productLogic.DeleteProduct(productLogic.ListOfProducts[4]);
productLogic.GetAllProducts();
productLogic.GetProductByCategoryOrManufacturer("Automobile", "BMW");
productLogic.SaveAllProducts([
    new Product(5, "Car 5", "Automobile", "BMW", "The best brand acccross the globe.The best brand acccross the globe.The best brand acccross the globe", 100000),
    new Product(6, "Car 6", "Automobile", "BMW", "The best brand acccross the globeThe best brand acccross the globe. The best brand acccross the globe", 100000)
]);
productLogic.UpdateProduct(new Product(6, "Updated car", "AutoMobile", "BMW", "The best brand acccross the globeThe best brand acccross the globe. The best brand acccross the globe", 100000));
