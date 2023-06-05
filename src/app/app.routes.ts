import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./feature/tasks/tasks.routes').then((m) => m.tasksRoutes),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
