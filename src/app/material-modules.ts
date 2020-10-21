// Material Angular Modules
import { NgModule } from '@angular/core';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    exports: [
        MatIconModule,
        MatInputModule,
        MatSidenavModule
    ]
})

export class MaterialModule { }