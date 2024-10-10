import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { article } from './article-data.model';  // Import your model interface

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(@InjectModel('article') private articleModel: Model<article>) {}

  async savearticle(article: any): Promise<any> {
    const createdForm = new this.articleModel(article);
    return createdForm.save();
  }
}
