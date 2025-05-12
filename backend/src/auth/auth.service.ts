import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthDto) {
    const existingUser = await this.prisma.account.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email đã được đăng ký');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.account.create({
      data: {
        email: dto.email,
        password: hashedPassword,
      },
    });

    return {
      message: 'Đăng ký thành công',
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async login(dto: AuthDto) {
    const user = await this.prisma.account.findUnique({
      where: { email: dto.email },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new BadRequestException('Email hoặc mật khẩu không đúng');
    }

    return {
      message: 'Đăng nhập thành công',
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
