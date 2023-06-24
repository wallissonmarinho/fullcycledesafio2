import { AssetsService } from './assets.service';
import AssetDto from './asset.dto';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    all(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
    }, unknown> & {})[]>;
    create(data: AssetDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        symbol: string;
    }, unknown> & {}>;
}
