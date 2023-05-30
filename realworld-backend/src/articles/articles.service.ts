import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
export class ArticlesService {
  // Add prisma
  constructor(private prisma: PrismaService) { }

  @UseGuards(AuthGuard)
  create(createArticleDto: CreateArticleDto, authorId: string) {
    // Use prisma to create an article
    return this.prisma.article.create({
      data: {
        ...createArticleDto,
        authorId: Number(authorId),
      },
    });
  }

  findAll() {
    // Use prisma to return all articles
    return this.prisma.article.findMany();

  }

  findOne(id: number) {
    // use prisma to return one article
    return this.prisma.article.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // use prisma to update an article
    return this.prisma.article.update({
      where: {
        id: id,
      },
      data: updateArticleDto,
    });

  }

  remove(id: number) {
    // use prisma to remove an article
    return this.prisma.article.delete({
      where: {
        id: id,
      },
    });
  }
}
