import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vingadores',
    loadChildren: () => import('./filmes/vingadores/vingadores.module').then( m => m.VingadoresPageModule)
  },
  {
    path: 'homemaranha',
    loadChildren: () => import('./filmes/homemaranha/homemaranha.module').then( m => m.HomemaranhaPageModule)
  },
  {
    path: 'coringa',
    loadChildren: () => import('./filmes/coringa/coringa.module').then( m => m.CoringaPageModule)
  },
  {
    path: 'aves',
    loadChildren: () => import('./filmes/aves/aves.module').then( m => m.AvesPageModule)
  },
  {
    path: 'oscroods',
    loadChildren: () => import('./filmes/oscroods/oscroods.module').then( m => m.OscroodsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
