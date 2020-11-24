import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/story',
                pathMatch: 'full'
            },
            {
                path: 'story',
                loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
            },
            {
                path: 'my-story',
                loadChildren: () => import('./my-story/my-story.module').then(mod => mod.MyStoryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ViewRoutingModule { }