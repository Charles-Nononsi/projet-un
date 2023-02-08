import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './/list-product/list-product.component';
import { DetailProductComponent } from './/detail-product/detail-product.component';

const routes: Routes = [

    { path: 'products', component: ListProductComponent},
    { path: 'products/:id', component: DetailProductComponent},
    { path: '',redirectTo:'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
