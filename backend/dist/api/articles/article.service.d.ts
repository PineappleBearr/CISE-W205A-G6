import { Article } from './article.schema';
import { Model } from 'mongoose';
import { CreateArticleDto } from './create-article.dto';
export declare class ArticleService {
    private ArticleModel;
    constructor(ArticleModel: Model<Article>);
    test(): string;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    findPending(): Promise<Article[]>;
    findProcessed(): Promise<Article[]>;
    findByYearPub(year: Number): Promise<Article[]>;
    findByAuthor(author: string): Promise<Article[]>;
    findByTitle(title: string): Promise<Article[]>;
    create(createArticleDto: CreateArticleDto): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, Article> & Article & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
