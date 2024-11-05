import { Routes } from '@angular/router';
import { SubmissionsComponent } from './components/submissions/submissions.component';

export const routes: Routes = [
    {
        path: '',
        component: SubmissionsComponent
    },
    {
        path: 'forms',
        component: SubmissionsComponent // Assigning `SubmissionsComponent` for now
    },
    {
        path: 'customers',
        component: SubmissionsComponent
    },
    {
        path: 'submissions',
        component: SubmissionsComponent
    },
    {
        path: 'history',
        component: SubmissionsComponent
    },
    {
        path: 'reports',
        component: SubmissionsComponent
    },
    {
        path: 'workflows',
        component: SubmissionsComponent
    },
];
