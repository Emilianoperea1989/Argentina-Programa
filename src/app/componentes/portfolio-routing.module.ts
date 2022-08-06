import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes= [
  {path:'',
  children:[
    {path:'sobre-mi',component:SobreMiComponent},
    {path:'habilidades',component:HabilidadesComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'proyectos',component:ProyectosComponent}
  ]

  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
