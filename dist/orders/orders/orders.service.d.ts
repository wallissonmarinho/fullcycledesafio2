import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';
import OrderReceiveDto from './order.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: OrderStatus;
    }, unknown> & {})[]>;
    create(data: OrderReceiveDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: OrderStatus;
    }, unknown> & {}>;
}
