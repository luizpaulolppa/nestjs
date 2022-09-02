import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get('/')
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get('/:id')
  objetUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post('/')
  criar(@Body() livro: Livro) {
    this.livrosService.criar(livro);
  }

  @Put('/:id')
  alterar(@Param() params, @Body() livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete('/:id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
