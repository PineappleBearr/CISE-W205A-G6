import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    test(): string;
    findPending(): Promise<import("./article.schema").Article[]>;
    findProcessed(): Promise<import("./article.schema").Article[]>;
    query(type: number, keyword: string): Promise<import("./article.schema").Article[]>;
    findAll(): Promise<import("./article.schema").Article[]>;
    findOne(id: string): Promise<import("./article.schema").Article>;
    addArticle(createArticleDto: CreateArticleDto): Promise<{
        message: string;
    }>;
    updateArticle(id: string, createArticleDto: CreateArticleDto): Promise<{
        message: string;
    }>;
    deleteArticle(id: string): Promise<import("mongoose").Document<unknown, {}, import("./article.schema").Article> & import("./article.schema").Article & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
