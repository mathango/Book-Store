import { Routes } from '@angular/router';

import { EditformComponent } from './editform/editform.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    {path:'register',component:RegisterComponent},
    {path:'table',component:TableComponent},
    {path:'edit/:id',component:EditformComponent},
    
];
