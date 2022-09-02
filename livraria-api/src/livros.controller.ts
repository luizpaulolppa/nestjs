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
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get('/:id')
  async objetUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post('/')
  async criar(@Body() livro: Livro) {
    this.livrosService.criar(livro);
  }

  @Put('/:id')
  async alterar(@Param() params, @Body() livro): Promise<[number]> {
    return this.livrosService.alterar(params.id, livro);
  }

  @Delete('/:id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
