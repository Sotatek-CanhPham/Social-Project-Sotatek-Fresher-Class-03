// import { EntityRepository, Repository } from 'typeorm';
// import { User } from '../entities/user.entity';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   async createUser(
//     fullname: string,
//     email: string,
//     password: string,
//   ): Promise<User> {
//     const user = new User();
//     user.fullname = fullname;
//     user.email = email;
//     user.password = password;

//     return await this.save(user);
//   }
// }
