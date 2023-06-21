import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EMPLOYEE_MODEL, Employee } from './employee.schema';
import { Model } from 'mongoose';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(EMPLOYEE_MODEL) private employeeModel: Model<Employee>) {}

  async createEmployee(employeeDto: EmployeeDto): Promise<Employee>{
    const {name, role, doj} = employeeDto;
    const employee = await this.employeeModel.create({
      name,
      role,
      doj
    });

    return employee;
  }

  async getAllEmployees(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }
}
