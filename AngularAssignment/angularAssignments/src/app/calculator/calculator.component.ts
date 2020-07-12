import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operationText = '';
  output : number=0;
  operand1='';
  operand2='';
  operator='';
  operand1Selected=false;
  selectedOperand1:number;
  selectedOperand2:number;
  constructor() { }

  ngOnInit(): void {
  }
  pressKey(key: string) {
    this.operationText+=key;
    if(key==='/' || key==='x' || key==='-' || key==='+')
    {
      if(this.operand1!==''){ 
        this.selectedOperand1=parseFloat(this.operand1);
        this.operand1Selected=true;
        this.operator=key;
      }
    }
    else{
      if(!this.operand1Selected)
      {
        this.operand1+=key;
      }
      else{
        this.operand2+=key;
      }
    }
  }
  
  allClear() {
    this.operationText = '';
    this.output = 0;
    this.operand1='';
    this.operand2='';
    this.operator='';
    this.operand1Selected=false;
    this.selectedOperand1=0;
    this.selectedOperand2=0;
  }
  getAnswer() {
    if(this.operand1!=='' && this.operand2!=='')
    {
      this.selectedOperand2=parseFloat(this.operand2);
      switch(this.operator)
      {
        case '/':
          this.output = this.selectedOperand1 / this.selectedOperand2;
          break;
        case 'x':
          this.output = this.selectedOperand1 * this.selectedOperand2;
          break;
        case '+':
          this.output = this.selectedOperand1 + this.selectedOperand2;
          break;
        case '-':
          this.output = this.selectedOperand1 - this.selectedOperand2;
          break;
      }
    }
  }
}
