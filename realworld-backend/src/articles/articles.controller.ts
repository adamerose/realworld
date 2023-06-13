import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { ArticleService } from './articles.service';
import { CreateArticleDto, EditArticleDto } from './dto';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get(':id')
  getArticleById(@Param('id') articleId: string) {
    return this.articleService.getArticleById(articleId);
  }

  @UseGuards(JwtGuard)
  @Post()
  createArticle(@GetUser('id') userId: string, @Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(userId, dto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  editArticleById(
    @GetUser('id') userId: string,
    @Param('id') articleId: string,
    @Body() dto: EditArticleDto,
  ) {
    return this.articleService.editArticleById(userId, articleId, dto);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteArticleById(
    @GetUser('id') userId: string,
    @Param('id') articleId: string,
  ) {
    return this.articleService.deleteArticleById(userId, articleId);
  }
}
