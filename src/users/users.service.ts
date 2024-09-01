import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "email": "one@gmail.com",
            "name": "One",
            "role": "intern"
        },
        {
            "id": 2,
            "email": "two@gmail.com",
            "name": "Two",
            "role": "engineer"
        },
        {
            "id": 3,
            "email": "three@gmail.com",
            "name": "Three",
            "role": "admin"
        },
        {
            "id": 4,
            "email": "four@gmail.com",
            "name": "Four",
            "role": "intern"
        },
        {
            "id": 5,
            "email": "five@gmail.com",
            "name": "Five",
            "role": "engineer"
        }
    ];

    findAll(role: 'intern' | 'engineer' | 'admin') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }

}
