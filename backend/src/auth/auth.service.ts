import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.account.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Email không tồn tại');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Mật khẩu sai');

    return { message: 'Đăng nhập thành công', user };
  }

  async register(email: string, password: string) {
    const existing = await this.prisma.account.findUnique({ where: { email } });
    if (existing) throw new UnauthorizedException('Email đã được sử dụng');

    const hashed = await bcrypt.hash(password, 10);
    const user = await this.prisma.account.create({
      data: { email, password: hashed },
    });

    return { message: 'Đăng ký thành công', user };
  }
}
