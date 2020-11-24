import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DetailContentComponent } from '../detail-content/detail-content.component';
import { FormStoryComponent } from './form-story/form-story.component';
import { ListStoryComponent } from './list-story/list-story.component';

const routes: Routes = [

    {
        path: '',
        component: ListStoryComponent
    },
    {
        path: 'add',
        component: FormStoryComponent
    },
    {
        path: 'edit/:id',
        component: FormStoryComponent
    },
    {
        path: 'detail/:id',
        children: [
            {
                path: '',
                component: DetailContentComponent,
                data: {
                    editable: true
                }
            },
            {
                path: 'edit',
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