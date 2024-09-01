/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
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
        return role;
    }

    // // GET INTERN
    // @Get('interns')
    // getAllInterns() {
    //     return [];
    // }

    // /GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    //  POST /users
    @Post()
    create(@Body() userData: {}) {
        return userData;
    }

    // PUT /users/:id
    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() userUpdateData: {}) {
        return { id, ...userUpdateData };
    }


    // /Delete /users/:id
    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return { id };
    }

}
