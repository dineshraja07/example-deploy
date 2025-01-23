import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { NoComponentComponent } from './no-component/no-component.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path:'',
      component:NoComponentComponent
    }
    ,
    {
        
        path:'users',
        component:UsersComponent,
        children:[
            {
                path: '',    // 'localhost:4200/user/' 
                redirectTo: 'user',    // redirect to tasks
                 pathMatch: 'full',         // prefix|full,
                // title:'No task selected'  
              },
            {
                path:'user',
                component:UserComponent
            }
            ,
            {
                path:'result',
                component:NoComponentComponent
            }
        ]
    }
]
