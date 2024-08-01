import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProdutoRequest {
  nome: string;
  quantidadeEstoque: number;
  preco: number;
}

export interface ProdutoResponse {
  id: number;
  nome: string;
  quantidadeEstoque: number;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8081/produto';

  salvar(produto: ProdutoRequest): Observable<ProdutoResponse> {
    return this.http.post<ProdutoResponse>(this.baseUrl, produto);
  }

  pegarPorId(id: number): Observable<ProdutoResponse> {
    return this.http.get<ProdutoResponse>(`${this.baseUrl}/${id}`);
  }

  listar(): Observable<ProdutoResponse[]> {
    return this.http.get<ProdutoResponse[]>(this.baseUrl);
  }

  atualizar(id: number, produto: ProdutoRequest): Observable<ProdutoResponse> {
    return this.http.put<ProdutoResponse>(`${this.baseUrl}/${id}`, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  atualizarEstoque(id: number, filter: any): Observable<ProdutoResponse> {
    return this.http.put<ProdutoResponse>(`${this.baseUrl}/${id}/produto`, filter);
  }
}