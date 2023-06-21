import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.get(DB_APP_MODULE_LINK)), EmployeeModule],
})
export class AppModule {}
