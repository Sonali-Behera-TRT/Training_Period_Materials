import { IsString } from "class-validator";


export class EmployeeDto {
  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsString()
  doj: string;
}