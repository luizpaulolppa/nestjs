import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutoService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutoService) {}

  @Get('/')
  obterTodos(): Produto[] {
    return this.produtoService.obterTodos();
  }

  @Get('/:id')
  objetUm(@Param() params): Produto {
    return this.produtoService.obterUm(params.id);
  }

  @Post('/')
  criar(@Body() produto: Produto) {
    this.produtoService.criar(produto);
  }

  @Put('/:id')
  alterar(@Param() params, @Body() produto): Produto {
    return this.produtoService.alterar(produto);
  }

  @Delete('/:id')
  apagar(@Param() params) {
    this.produtoService.apagar(params.id);
  }
}
