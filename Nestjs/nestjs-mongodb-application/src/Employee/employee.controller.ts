import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './employee.dto';
import { Employee } from './employee.schema';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  createEmployee(@Body() employeeDto: EmployeeDto): Promise<Employee> {
    return this.employeeService.createEmployee(employeeDto);
  }

  @Get()
  getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }
}
