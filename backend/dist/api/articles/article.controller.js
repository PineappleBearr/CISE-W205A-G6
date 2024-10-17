"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./create-article.dto");
const console_1 = require("console");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    test() {
        return this.articleService.test();
    }
    async findPending() {
        try {
            return this.articleService.findPending();
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Article found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async findProcessed() {
        try {
            return this.articleService.findProcessed();
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Article found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async query(type, keyword) {
        try {
            if (type == 1) {
                return this.articleService.findByAuthor(keyword);
            }
            else if (type == 2) {
                return this.articleService.findByYearPub(parseInt(keyword));
            }
            else if (type == 3) {
                return this.articleService.findByTitle(keyword);
            }
            else {
                return [];
            }
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Article found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async findAll() {
        try {
            return this.articleService.findAll();
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Articles found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async findOne(id) {
        try {
            return this.articleService.findOne(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No Article found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async addArticle(createArticleDto) {
        try {
            await this.articleService.create(createArticleDto);
            return { message: 'Article added successfully' };
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Unable to add this Article',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async updateArticle(id, createArticleDto) {
        try {
            await this.articleService.update(id, createArticleDto);
            return { message: 'Article updated successfully' };
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Unable to update this Article',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async deleteArticle(id) {
        try {
            return await await this.articleService.delete(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No such a Article',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "test", null);
__decorate([
    (0, common_1.Get)("/pending"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findPending", null);
__decorate([
    (0, common_1.Get)("/processed"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findProcessed", null);
__decorate([
    (0, common_1.Get)('/query/:type/:keyword'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "query", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addArticle", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('api/articles'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map