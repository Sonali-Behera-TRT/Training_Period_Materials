import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Employee extends Document {
  @Prop()
  name: string;

  @Prop()
  role: string;

  @Prop()
  doj: string;
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
export const EMPLOYEE_MODEL = 'Employee';