import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseResponse } from './BaseResponse';
import { UserDto } from './UserDto';
import { UserGrantsDto } from './UserGrantsDto';


export class GetUsersResult {
  @ApiProperty({ description: 'Dati utente', type: UserDto })
  @ValidateNested()
  @Type(() => UserDto)
  utente?: UserDto;

  @ApiProperty({ description: 'Abilitazioni e ruoli utente', type: UserGrantsDto })
  @ValidateNested()
  @Type(() => UserGrantsDto)
  userGrants?: UserGrantsDto;

  @ApiProperty({ description: 'Extension Fields', type: Object })
  extensionFields?: any;

}

export class GetUsersResponse extends BaseResponse {
  @ApiProperty({ type: [UserDto] })
  @ValidateNested({ each: true })
  @Type(() => UserDto)
  Result: GetUsersResult[];
}


