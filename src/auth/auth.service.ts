import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name ) 
    private userModel: Model<User>
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    // TODO: encriptar contraseña
    // TODO: guardar usuario
    // TODO: generar JWT

    try {
      const newUser = new this.userModel( CreateUserDto );
      return await newUser.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${ CreateUserDto.email } ya existe`);
      }
      throw new InternalServerErrorException('Error fatal!!');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
