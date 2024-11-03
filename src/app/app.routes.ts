import { Routes } from '@angular/router';
import {SubmissionsComponent} from './components/submissions/submissions.component';

export const routes: Routes = [
    {
        path: '',
        component: SubmissionsComponent
    },
    {
        path: 'forms',
        redirectTo: 'www.google.com'
    },
    {
        path: 'Customers',
        redirectTo: 'www.google.com'
    },
    {
        path: 'submissions',
        component: SubmissionsComponent
    },
    {
        path: 'history',
        redirectTo: 'www.google.com'
    },
    {
        path: 'reports',
        redirectTo: 'www.google.com'
    },
    {
        path: 'workflows',
        redirectTo: 'www.google.com'
    },
];
