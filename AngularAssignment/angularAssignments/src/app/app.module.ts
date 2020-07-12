import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductLogicComponent } from './product-component/product-logic/product-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ProductComponentComponent,
    ProductLogicComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
