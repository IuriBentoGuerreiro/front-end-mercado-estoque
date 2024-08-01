import { Component } from '@angular/core';
import { ProdutoResponse, ProdutoService } from '../../../services/produto/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-listar',
  standalone: true,
  imports: [ProdutoListarComponent, CommonModule],
  templateUrl: './produto-listar.component.html',
  styleUrl: './produto-listar.component.scss'
})
export class ProdutoListarComponent {

  produtos: ProdutoResponse[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe(
      (data: ProdutoResponse[]) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao listar produtos', error);
      }
    );
  }

}
