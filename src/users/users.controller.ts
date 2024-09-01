/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
interface User {
    email: string;
    name: string;
    role: 'intern' | 'engineer' | 'admin';
}

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }
    /*
    GET /users
    GET /users/:id
    POST /users
    PUT /users/:id
    DELETE /users/:id
    */

    //? /users or /users?role=value
    @Get()
    findAll(@Query('role') role?: 'intern' | 'engineer' | 'admin') {
        return this.userService.findAll(role);
    }

    // // GET INTERN
    // @Get('interns')
    // getAllInterns() {
    //     return [];
    // }

    // /GET /users/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

    //  POST /users
    @Post()
    create(@Body() userData: User) {
        return this.userService.create(userData);
    }

    // PUT /users/:id
    @Patch(':id')
    updateOne(@Param('id', ParseIntPipe) id: number, @Body() userUpdateData: {}) {
        return this.userService.update(id, userUpdateData);
    }


    // /Delete /users/:id
    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }

}
