import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EmbServiceComponent } from './emb-service/emb-service.component';
import { VecServiceComponent } from './vec-service/vec-service.component';
import { GraphicServiceComponent } from './graphic-service/graphic-service.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'EmbroidryService', component:EmbServiceComponent },
  { path: 'Vector', component:VecServiceComponent},
  { path: 'Graphic-design', component:GraphicServiceComponent},

];
