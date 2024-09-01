import { Injectable } from '@nestjs/common';

interface User {
    email: string;
    name: string;
    role: 'intern' | 'engineer' | 'admin';
}

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
    };

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            return 'No User with is id'
        }
        return user;
    };

    create(user: User) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser);
        return this.users;
    }

    update(id: number, updateUser: Partial<User>) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUser }
            }
            return user;
        })
        return this.findOne(id);

    };

    delete(id: number) {
        return this.users.filter(user => user.id !== id);
    }

}
