import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto, EditArticleDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  getArticles() {
    return this.prisma.article.findMany();
  }

  getArticleById(articleId: string) {
    return this.prisma.article.findFirst({
      where: {
        id: articleId,
      },
    });
  }

  async createArticle(authorId: string, dto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        authorId,
        ...dto,
      },
    });

    return article;
  }

  async editArticleById(
    authorId: string,
    articleId: string,
    dto: EditArticleDto,
  ) {
    // get the article by id
    const article = await this.prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    // check if user owns the article
    if (!article || article.authorId !== authorId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteArticleById(authorId: string, articleId: string) {
    const article = await this.prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    // check if user owns the article
    if (!article || article.authorId !== authorId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.article.delete({
      where: {
        id: articleId,
      },
    });
  }
}
