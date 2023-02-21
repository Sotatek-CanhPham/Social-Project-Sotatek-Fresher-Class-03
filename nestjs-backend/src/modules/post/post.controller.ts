import { MyJwtGuard } from './../auth/guard/myjwt.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { GetUser } from '../auth/decorator';

@UseGuards(MyJwtGuard)
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(@GetUser('id') userId: string) {
    return this.postService.getPosts(userId);
  }

  @Get(':id')
  getPostById(@Param('id') postId: string) {
    return this.postService.getPostById(postId);
  }

  @Post()
  createPost(
    @GetUser('id') userId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postService.createPost(userId, createPostDto);
  }

  // @Patch()
  // updatePostById(
  //   @GetUser('id') userId: string,
  //   @Body() updatePostDto: UpdatePostDto,
  // ) {
  //   return this.postService.updatePostById(userId, updatePostDto);
  // }

  // @Delete()
  // deletePostById(@GetUser('id') userId: string) {
  //   return this.postService.deletePostById(userId);
  // }
}
