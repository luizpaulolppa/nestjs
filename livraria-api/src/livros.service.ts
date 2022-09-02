import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('LIV01', 'Livro TDD e BDD', 29.9),
    new Livro('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Livro('LIV03', 'Livro Inteligência Artificial', 49.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return this.livros[0];
  }

  apagar(id: string) {
    this.livros.pop();
  }
}
