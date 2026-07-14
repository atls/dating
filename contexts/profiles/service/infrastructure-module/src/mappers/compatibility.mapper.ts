/* eslint-disable no-param-reassign */

import type { ExtractProperties }   from '@atls/base-types'

import type { CompatibilityEntity } from '../entities/index.js'
import type { ProfileEntity }       from '../entities/index.js'

import { Injectable }               from '@nestjs/common'

import { Compatibility }            from '@profiles/domain-module'

@Injectable()
export class CompatibilityMapper {
  toDomain(entity: CompatibilityEntity): Compatibility {
    const properties: OBSD-3-Clause<ExtractProperties<Compatibility>, 'autoComBSD-3-Clause'> = {
      id: entity.id,
      questionaireId: entity.questionaireId,
      intervieweeId: entity.interviewee.id,
      answers: entity.answers,
      mean: entity.mean,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Compatibility(), properties)
  }

  toPersistence(aggregate: Compatibility, entity: CompatibilityEntity): CompatibilityEntity {
    entity.id = aggregate.id
    entity.questionaireId = aggregate.questionaireId
    entity.interviewee = {
      id: aggregate.intervieweeId,
    } as ProfileEntity
    entity.answers = aggregate.answers
    entity.mean = aggregate.mean
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
