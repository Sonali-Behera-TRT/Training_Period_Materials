import { TaskStatus } from "../task-status.enum";
import { IsNotEmpty, IsEnum, IsOptional } from "class-validator";

export class GetTaskFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsNotEmpty()
  @IsOptional()
  search?: string;
}