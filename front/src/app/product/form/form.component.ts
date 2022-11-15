import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApirestService } from '@core/services/apirest.service';
import { Product } from 'app/models/product';
import { SingletonService } from '@core/services/singleton.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form!: FormGroup;
  public titleForm = 'Nuevo producto';

  constructor(private formBuilder: FormBuilder,
              private  _productService:  ApirestService,
              public route: ActivatedRoute,
              public router: Router,
              public singleton: SingletonService,
              public location: Location) {

    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      type: ['', [Validators.required]],
      description: [''],
      price: ['', [Validators.required, , Validators.minLength(1), Validators.pattern(/^[1-9]\d{0,10}$/)]]
    });
  }


  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const PRODUCT : Product = {
      name : this.form.get('name').value,
      type : this.form.get('type').value,
      description : this.form.get('description').value,
      price : this.form.get('price').value,
    }

    this._productService.saveProducts(PRODUCT).subscribe(data => {
      this.singleton.showAlert({ type: 'success', content: 'El producto fue registrado con éxito' });
      this.router.navigate(['/'])
    })
  }


  // getInformation() {
  //   // this.singleton.updateLoading(true);
  //   this.service.queryGet('categories/' + this.categoryId).subscribe(
  //     (response: any) => {
  //       let category = response.data;
  //       this.form.controls['name'].setValue(category.name);
  //         this.singleton.updateLoading(false);
  //     },
  //     (err: any) => { }
  //   );
  // }
}
