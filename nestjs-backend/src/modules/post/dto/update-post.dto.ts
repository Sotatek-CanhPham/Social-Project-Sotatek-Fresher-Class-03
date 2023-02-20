import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsNotEmpty()
  published?: string;
}
