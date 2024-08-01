import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VendaComponent } from './components/venda/venda.component';
import { ProdutoCadastrarComponent } from './components/produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListarComponent } from './components/produto/produto-listar/produto-listar.component';
import { VendaSalvarComponent } from './components/venda/venda-salvar/venda-salvar.component';
import { VendaListarComponent } from './components/venda/venda-listar/venda-listar.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "venda",
        component: VendaComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, 
    {
        path: "produto/cadastrar",
        component: ProdutoCadastrarComponent
    },
    {
        path: "produto/listar",
        component: ProdutoListarComponent
    }, 
    {
        path: "venda/salvar",
        component: VendaSalvarComponent
    },
    {
        path: "venda/listar",
        component: VendaListarComponent
    }
];
