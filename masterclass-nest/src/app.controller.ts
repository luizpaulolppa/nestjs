import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/CreateTeamMemberBody';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('/api/members')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('/')
  async create(@Body() body: CreateTeamMemberBody) {
    const { name, function: functionName } = body;

    await this.rocketMembersRepository.create(name, functionName);
  }
}
