
import { NgModule } from "@angular/core"
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        //declaramos loc componentes que vamos a usar 
        ContadorComponent,
    ],
    
    exports: [
        //exportamos los componentes que necesitamos usar en el resto de la aplicacion
        // si no lo exportamos estan pero de manera invisible
        ContadorComponent
    ],

})
export class ContadorModule{}