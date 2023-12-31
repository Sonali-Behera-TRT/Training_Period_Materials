import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository, private jwtService: JwtService) {}

  signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken }> {
    const {username, password} = authCredentialsDto;
    const user = await this.usersRepository.findOneBy({username});

    if(user && (await bcrypt.compare(password, user.password))){
      const payload: JwtPayload = { username };
      const accessToken: string = this.jwtService.sign(payload);
      return {accessToken};
    } else {
      throw new UnauthorizedException('Please check your login credentials again!!!');
    }
  }
}