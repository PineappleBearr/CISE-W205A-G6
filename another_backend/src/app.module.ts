import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  // Import MongooseModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { articleSchema } from './article-data.model';  // Import your schema
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB_URI),  // Use your MongoDB URI from .env
    MongooseModule.forFeature([{ name: 'article', schema: articleSchema }]),  // Register your model
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


