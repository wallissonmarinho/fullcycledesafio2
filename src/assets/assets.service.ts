import { BadRequestException, Injectable } from '@nestjs/common';
import { Asset } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateAssetDto): Promise<Asset> {
    let asset = await this.prismaService.asset.findUnique({
      where: { id: data.id },
    });
    if (asset) {
      throw new BadRequestException('Asset already exists');
    }
    return this.prismaService.asset.create({ data: data });
  }

  getAll(): Promise<Asset[]> {
    return this.prismaService.asset.findMany({ include: { Order: true } });
  }
}
