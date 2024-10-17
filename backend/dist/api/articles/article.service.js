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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const article_schema_1 = require("./article.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ArticleService = class ArticleService {
    constructor(ArticleModel) {
        this.ArticleModel = ArticleModel;
    }
    test() {
        return 'article route testing';
    }
    async findAll() {
        return await this.ArticleModel.find().exec();
    }
    async findOne(id) {
        return await this.ArticleModel.findById(id).exec();
    }
    async findPending() {
        return await this.ArticleModel.find().or([{ 'status': 'submitted' }, { 'status': '' }]).exec();
    }
    async findProcessed() {
        return await this.ArticleModel.find().or([{ 'status': 'accepted' }, { 'status': 'rejected' }]).exec();
    }
    async findByYearPub(year) {
        return await this.ArticleModel.find({ 'yearPub': year }).exec();
    }
    async findByAuthor(author) {
        return await this.ArticleModel.find({ 'authors': author }).exec();
    }
    async findByTitle(title) {
        return await this.ArticleModel.find({ 'title': { $regex: title, $options: 'i' } }).exec();
    }
    async create(createArticleDto) {
        return await this.ArticleModel.create(createArticleDto);
    }
    async update(id, createArticleDto) {
        return await this.ArticleModel.findByIdAndUpdate(id, createArticleDto).exec();
    }
    async delete(id) {
        const deletedArticle = await this.ArticleModel.findByIdAndDelete(id).exec();
        return deletedArticle;
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticleService);
//# sourceMappingURL=article.service.js.map