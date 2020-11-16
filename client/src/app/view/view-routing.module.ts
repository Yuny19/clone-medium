import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { NewStoryComponent } from './new-story/new-story.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'my-story',
        component: MyStoryComponent
    },
    {
        path: 'new-story',
        component: NewStoryComponent
    },
    {
        path: 'detail/:id',
        component: DetailContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }