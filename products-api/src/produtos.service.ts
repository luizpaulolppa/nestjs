import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutoService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD', 29.9),
    new Produto('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Livro Inteligência Artificial', 49.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return this.produtos[0];
  }

  apagar(id: string) {
    this.produtos.pop();
  }
}
