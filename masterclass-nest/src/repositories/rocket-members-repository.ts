export abstract class RocketMembersRepository {
  abstract create(name: string, functionName: string): Promise<void>;
}
