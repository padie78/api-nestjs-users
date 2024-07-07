import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express'



@Controller('users')
export class UsersController {
 
 constructor(private userService: UsersService){}

 @Get()
 async getUsers(@Req() request: Request) {
    const users = await this.userService.getUsers();
    return users;

 }


 @Get(':idUser')
 async getUser(@Param('idUser') idUser: number) {
    const user = await this.userService.getUser(idUser);
    return user;

 }
 


}
