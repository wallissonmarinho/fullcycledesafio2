import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    try {
      this.$connect();
    } catch (error) {
      console.log('Erro ao conectar no banco de dados', error);
    }
  }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit', () => app.close());
  }
}
