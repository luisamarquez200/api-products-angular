import { Component, OnInit } from '@angular/core';
import { ApirestService } from '@core/services/apirest.service';
import { SingletonService } from '@core/services/singleton.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public products = []

  constructor( private  _productService:  ApirestService,
              public singleton: SingletonService,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.getProduct();

  }


  getProduct(){
    this._productService.getProducts().subscribe(data => {
      this.products = data;
      if(this.products = []){
        this.router.navigate(['/nuevo'])
      } 
    })
  }

  deleteProduct(id : any){
    this._productService.deleteProducts(id).subscribe(data => {
      this.singleton.showAlert({ type: 'error', content: 'El producto fue eliminado con éxito' });
      this.getProduct();
    })

  }
}
