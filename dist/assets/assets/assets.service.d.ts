import { PrismaService } from 'src/prisma/prisma/prisma.service';
import AssetDto from './asset.dto';
export declare class AssetsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
    }, unknown> & {})[]>;
    create(data: AssetDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
    }, unknown> & {}>;
}
