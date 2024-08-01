import { Component } from '@angular/core';
import { ProdutoRequest, ProdutoResponse, ProdutoService } from '../../../services/produto/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-produto-cadastrar',
  standalone: true,
  imports: [ProdutoCadastrarComponent, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './produto-cadastrar.component.html',
  styleUrl: './produto-cadastrar.component.scss'
})
export class ProdutoCadastrarComponent {
  produtos: ProdutoResponse[] = [];
  novoProduto: ProdutoRequest = { nome: '', quantidadeEstoque: 0, preco: 0 };

  constructor(private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.listar().subscribe(
      (data: ProdutoResponse[]) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao listar produtos', error);
      }
    );
  }

  salvarProduto(): void {
    if (this.novoProduto.nome && this.novoProduto.preco && this.novoProduto.quantidadeEstoque) {
      this.produtoService.salvar(this.novoProduto).subscribe(
        (data: ProdutoResponse) => {
          console.log('Produto salvo com sucesso', data);
          this.listarProdutos(); // Atualiza a lista de produtos
          this.novoProduto = { nome: '', preco: 0, quantidadeEstoque: 0 }; // Reset do formulário
        },
        (error) => {
          console.error('Erro ao salvar o produto', error);
        }
      );
    } else {
      console.error('Dados do produto são inválidos');
    }
  }

  onSubmit(): void {
    alert('Formulário enviado!');
  }

}
