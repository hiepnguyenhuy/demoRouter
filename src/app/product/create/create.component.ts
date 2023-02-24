import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../model/Product";
import {ProductService} from "../../service/ProductService";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  id: any
  product: Product | undefined;
  products: Product[] = [];
  formCreate !: FormGroup;
  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl("0", [Validators.required,Validators.max(50)]),
      name: new FormControl("0"),
      img: new FormControl("0"),
      price: new FormControl("0"),
    })
  }

  creatProduct(){
    alert("thành công")
    this.productService.createProduct(this.formCreate.value);
  }

}
