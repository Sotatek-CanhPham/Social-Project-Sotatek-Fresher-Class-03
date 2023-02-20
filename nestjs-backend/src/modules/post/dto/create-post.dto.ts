import { IsInt, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsNotEmpty()
  published: string;
}
