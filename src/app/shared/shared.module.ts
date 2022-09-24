import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgMaterialModule } from './ng-material.module';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [PageNotFoundComponent, HomePageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PageNotFoundComponent,
    HomePageComponent,
    NavigationModule,
    NgMaterialModule
  ],
})
export class SharedModule {}
