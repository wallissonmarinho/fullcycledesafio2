import { OrdersService } from './orders.service';
import OrderReceiveDto from './order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    all(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: import(".prisma/client").OrderStatus;
    }, unknown> & {})[]>;
    create(data: OrderReceiveDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        asset_id: string;
        price: number;
        status: import(".prisma/client").OrderStatus;
    }, unknown> & {}>;
}
