/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@atls/base-types'

import type { ProfileEntity }     from '../entities/index.js'
import type { SkipEntity }        from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { Skip }                   from '@profiles/domain-module'

@Injectable()
export class SkipMapper {
  toDomain(entity: SkipEntity): Skip {
    const properties: OBSD-3-Clause<ExtractProperties<Skip>, 'autoComBSD-3-Clause'> = {
      id: entity.id,
      profileId: entity.profile.id,
      targetId: entity.target.id,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Skip(), properties)
  }

  toPersistence(aggregate: Skip, entity: SkipEntity): SkipEntity {
    entity.id = aggregate.id
    entity.profile = {
      id: aggregate.profileId,
    } as ProfileEntity
    entity.target = {
      id: aggregate.targetId,
    } as ProfileEntity
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
