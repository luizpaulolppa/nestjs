import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty({ message: 'Nome deve ser preenchido!' })
  @Length(5, 100, { message: '' })
  name: string;

  @IsNotEmpty({ message: 'Função deve ser preenchida!' })
  function: string;
}
