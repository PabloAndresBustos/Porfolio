import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page')
    .then( m => m.MainPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/main/home/home.page')
        .then( m => m.HomePage)
      },
      {
        path: 'experiences',
        loadComponent: () => import('./pages/main/experiences/experiences.page')
        .then( m => m.ExperiencesPage)
      },
      {
        path: 'studies',
        loadComponent: () => import('./pages/main/studies/studies.page')
        .then( m => m.StudiesPage)
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/main/projects/projects.page')
        .then( m => m.ProjectsPage)
      },
    ]
  },
];
