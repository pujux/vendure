import { DeepPartial } from '@vendure/common/lib/shared-types';
import { Column, Entity, Index } from 'typeorm';

import { VendureEntity } from '../../entity/base/base.entity';

@Entity()
export class CacheItem extends VendureEntity {
    constructor(input: DeepPartial<CacheItem>) {
        super(input);
    }

    @Index('cache_item_key')
    @Column({ unique: true })
    key: string;

    @Column('text')
    value: string;

    @Column({ nullable: true })
    expiresAt?: Date;
}