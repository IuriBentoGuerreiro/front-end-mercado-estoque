import { Component } from '@angular/core';
import { VendaResponse, VendaService } from '../../../services/venda/venda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venda-listar',
  standalone: true,
  imports: [VendaListarComponent, CommonModule],
  templateUrl: './venda-listar.component.html',
  styleUrl: './venda-listar.component.scss'
})
export class VendaListarComponent {
  vendas: VendaResponse[] = [];
  errorMessage: string | undefined;


  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.listarVendas();
  }

  listarVendas(): void {
    this.vendaService.listar().subscribe(
      (data: VendaResponse[]) => {
        this.vendas = data;
      },
      (error) => {
        console.error('Erro ao listar vendas', error);
        this.errorMessage = 'Erro ao listar vendas: ' + error.message;
      }
    );
  }

}
