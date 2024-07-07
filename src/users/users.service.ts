import { HttpException, Injectable } from '@nestjs/common';
import { USERS } from './mocks/users.mock';

@Injectable()
export class UsersService {

    users = USERS;

    getUsers(): Promise<any>{
        return new Promise(resolve => {
            resolve(this.users);
        });
    }

    getUser(idUser: number): Promise<any> {
        return new Promise(resolve => {
            const user = this.users.find(user => user.id == idUser);

            if (!user){
                throw new HttpException("user do not exist", 404);
            }

            resolve(user);

        });
    }

    addUser(user){
        return new Promise(resolve => {
            this.users.push(user);
            resolve(this.getUsers());
       });
    }

    delUser(idUser: number): Promise<any>{
        return new Promise(resolve => {
            const index = this.users.findIndex(user => user.id == idUser);
            if (index === -1) {
                throw new HttpException('User does not exist!', 404);
            }
            this.users.splice(1, index);
            resolve(this.getUsers());
        })
    }


}
