import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers(): {} {
        return this.userService.getUsers();
    }

    @Get(':name')
    getUser(@Param('name') name: string): {} {
        return this.userService.getUser( name );
    }
}
