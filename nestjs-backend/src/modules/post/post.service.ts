import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}
  getPosts(userId: string) {}

  getPostById(postId: string) {}

  async createPost(userId: string, createPostDto: CreatePostDto) {
    const post = await this.prismaService.post.create({
      data: {
        content: createPostDto.content,
        published: createPostDto.published,
        userId,
      },
    });
    return post;
  }
  updatePostById(userId: string, updatePostDto: UpdatePostDto) {}

  deletePostById(userId: string) {}
}
