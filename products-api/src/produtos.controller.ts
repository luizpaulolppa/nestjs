import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get('/')
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get('/:id')
  objetUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post('/')
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put('/:id')
  alterar(@Param() params, @Body() produto): string {
    console.log(params);
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete('/:id')
  apagar(@Param() params): string {
    console.log(params);
    return 'Produto apagado';
  }
}
