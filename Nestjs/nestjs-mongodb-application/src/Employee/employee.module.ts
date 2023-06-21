import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EMPLOYEE_MODEL, EmployeeSchema } from './employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EMPLOYEE_MODEL, schema: EmployeeSchema }]),
  ],
  exports: [MongooseModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
