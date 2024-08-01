import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface VendaRequest {
  produtoId: number;
  cliente: string;
  quantidade: number;
}

export interface VendaResponse {
  id: number;
  produto: { id: number; nome: string; preco: number }; 
  cliente: string;
  quantidade: number;
  precoTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private baseUrl = 'http://localhost:8081/pedido';

  constructor(private http: HttpClient) { }

    salvar(venda: VendaRequest): Observable<VendaResponse> {
    return this.http.post<VendaResponse>(this.baseUrl, venda);
  }

    listar(): Observable<VendaResponse[]> {
    return this.http.get<VendaResponse[]>(this.baseUrl);
  }

    buscarPorId(id: number): Observable<VendaResponse> {
    return this.http.get<VendaResponse>(`${this.baseUrl}/${id}`);
  }

    atualizar(id: number, venda: VendaRequest): Observable<VendaResponse> {
    return this.http.put<VendaResponse>(`${this.baseUrl}/${id}`, venda);
  }

    deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }}
