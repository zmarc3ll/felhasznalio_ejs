import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './Person';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(){
    let persons: Array<Person> = [];
    persons.push(new Person('Gipsz Jakab','ferfi','1983.04.30',55000,'active'));
    persons.push(new Person('Horváth Amanda','nő','1980.02.11',45677,'active'));
    persons.push(new Person('Horváth Amanda','nő','1980.02.11',45677,'active'));
    persons.push(new Person('Horváth Amanda','nő','1980.02.11',45677,'active'));
    persons.push(new Person('Horváth Amanda','nő','1980.02.11',45677,'active'));
    persons.push(new Person('Horváth Amanda','nő','1980.02.11',45677,'inactive'));
    return { persons: persons.filter(person => person.isAktiv()) };
  }
}
