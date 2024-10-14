import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';
import { error } from 'console';

@Controller('api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/test')
  test() {
    return this.articleService.test();
  }

  @Get("/pending")
  async findPending() {
	try {
		return this.articleService.findPending();
	} catch {
		throw new HttpException(
		  {
			status: HttpStatus.NOT_FOUND,
			error: 'No Article found',
		  },
		  HttpStatus.NOT_FOUND,
		  { cause: error },
		);
	}
  }

  @Get("/processed")
  async findProcessed() {
	try {
		return this.articleService.findProcessed();
	} catch {
		throw new HttpException(
		  {
			status: HttpStatus.NOT_FOUND,
			error: 'No Article found',
		  },
		  HttpStatus.NOT_FOUND,
		  { cause: error },
		);
	}
  }


    // find articles
	// type = 1, find by author
	// type = 2, find by year pub
	// type =3, find by title
	// otherwise, return empty array
	@Get('/query/:type/:keyword')
	async query(@Param('type') type: number, @Param('keyword') keyword: string) {
	  try {
		if(type == 1) {
			return this.articleService.findByAuthor(keyword);
		} else if(type == 2) {
			return this.articleService.findByYearPub(parseInt(keyword));
		} else if(type == 3) {
			return this.articleService.findByTitle(keyword);
		} else {
			return []
		}
		
	  } catch {
		throw new HttpException(
		  {
			status: HttpStatus.NOT_FOUND,
			error: 'No Article found',
		  },
		  HttpStatus.NOT_FOUND,
		  { cause: error },
		);
	  }
	}

  // Get all Articles
  @Get('/')
  async findAll() {
    try {
      return this.articleService.findAll();
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Articles found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  // Get one Article via id
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.articleService.findOne(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Article found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

  

  // Create/add a Article
  @Post('submit-form')
  async addArticle(@Body() createArticleDto: CreateArticleDto) {
    try {
      await this.articleService.create(createArticleDto);
      return { message: 'Article added successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this Article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  // Update a Article
  @Put('/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    try {
      await this.articleService.update(id, createArticleDto);
      return { message: 'Article updated successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to update this Article',
        },
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  // Delete a Article via id
  @Delete('/:id')
  async deleteArticle(@Param('id') id: string) {
    try {
      return await await this.articleService.delete(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such a Article',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
}
