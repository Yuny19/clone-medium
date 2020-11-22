import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { MyStoryComponent } from './my-story.component';
import { DetailContentComponent } from '../detail-content/detail-content.component';
import { FormStoryComponent } from 'src/app/component/form-story/form-story.component';

const routes: Routes = [

    {
        path: '',
        component: MyStoryComponent
    },
    {
        path: 'edit/:id',
        component: FormStoryComponent
    },
    {
        path: 'detail/:id',
        component: DetailContentComponent,
        data:{
            editable: true
        },
        children:[
            {
                path:'edit/:id',
                component: FormStoryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class MyStoryRoutingModule { }