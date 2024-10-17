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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = exports.Article = exports.ARTICLE_STATUS = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var ARTICLE_STATUS;
(function (ARTICLE_STATUS) {
    ARTICLE_STATUS["submited"] = "submited";
    ARTICLE_STATUS["accepted"] = "accepted";
    ARTICLE_STATUS["rejected"] = "rejected";
})(ARTICLE_STATUS || (exports.ARTICLE_STATUS = ARTICLE_STATUS = {}));
let Article = class Article {
};
exports.Article = Article;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Article.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Article.prototype, "yearPub", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "claim", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ARTICLE_STATUS, default: ARTICLE_STATUS.submited }),
    __metadata("design:type", String)
], Article.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Object)
], Article.prototype, "submitDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Object)
], Article.prototype, "processDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Article.prototype, "sumRating", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Article.prototype, "numRating", void 0);
exports.Article = Article = __decorate([
    (0, mongoose_1.Schema)()
], Article);
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=article.schema.js.map