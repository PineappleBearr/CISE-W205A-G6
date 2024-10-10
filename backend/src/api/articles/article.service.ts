import { Injectable } from '@nestjs/common';
import { Article } from './article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private ArticleModel: Model<Article>) {}

  test(): string {
    return 'article route testing';
  }

  async findAll(): Promise<Article[]> {
    return await this.ArticleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return await this.ArticleModel.findById(id).exec();
  }

  async findPending(): Promise<Article[]> {
    return await this.ArticleModel.find().or([{'status': 'submited'}, {'status': ''}]).exec()
  }

  async findProcessed(): Promise<Article[]> {
    return await this.ArticleModel.find().or([{'status': 'accepted'}, {'status': 'rejected'}]).exec()
  }

  async findByYearPub(year: Number): Promise<Article[]> {
    return await this.ArticleModel.find({'yearPub': year}).exec()
  }

  async findByAuthor(author: string): Promise<Article[]> {
    return await this.ArticleModel.find({'authors': author}).exec()
  }

  async findByTitle(title: string): Promise<Article[]> {
    return await this.ArticleModel.find({'title': { $regex: title, $options: 'i' }}).exec()
  }

  async create(createArticleDto: CreateArticleDto) {
    return await this.ArticleModel.create(createArticleDto);
  }

  async update(id: string, createArticleDto: CreateArticleDto) {
    return await this.ArticleModel.findByIdAndUpdate(id, createArticleDto).exec();
  }

  async delete(id: string) {
    const deletedArticle = await this.ArticleModel.findByIdAndDelete(id).exec();
    return deletedArticle;
  }
}
