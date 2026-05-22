export class CreateTaskDto {
  title!: string;
  priority!: string;
  completed?: boolean;
}