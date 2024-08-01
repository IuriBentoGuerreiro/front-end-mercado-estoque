import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VendaRequest, VendaResponse, VendaService } from '../../../services/venda/venda.service';
import { FormsModule } from '@angular/forms';
import { ProdutoResponse, ProdutoService } from '../../../services/produto/produto.service';

@Component({
  selector: 'app-venda-salvar',
  standalone: true,
  imports: [VendaSalvarComponent, CommonModule, FormsModule],
  templateUrl: './venda-salvar.component.html',
  styleUrl: './venda-salvar.component.scss'
})
export class VendaSalvarComponent {
  vendas: VendaResponse[] = [];
  novaVenda: VendaRequest = { produtoId: 0, cliente: '', quantidade: 0 };
  vendaAtual: VendaResponse | undefined;

  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.listarVendas(); // Carrega a lista de vendas ao iniciar o componente
  }

  listarVendas(): void {
    this.vendaService.listar().subscribe(
      (data: VendaResponse[]) => {
        this.vendas = data;
      },
      (error) => {
        console.error('Erro ao listar vendas', error);
      }
    );
  }

  salvarVenda(): void {
    if (this.novaVenda.produtoId && this.novaVenda.cliente && this.novaVenda.quantidade) {
        console.log('Dados enviados para salvar a venda:', this.novaVenda); // Adicione isso para verificar o payload

        this.vendaService.salvar(this.novaVenda).subscribe(
            (data: VendaResponse) => {
                console.log('Venda salva com sucesso', data);
                this.listarVendas(); // Atualiza a lista de vendas
                this.novaVenda = { produtoId: 0, cliente: '', quantidade: 0 }; // Reset do formulário
            },
            (error) => {
                console.error('Erro ao salvar a venda', error);
                console.log('Resposta do erro:', error.error); // Adicione isso para ver detalhes do erro
            }
        );
    } else {
        console.error('Dados da venda são inválidos');
    }
}

  

}
