import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbilitazioneMenu } from './AbilitazioneMenu';

export class Role {
    @ApiPropertyOptional({ description: 'Codice univoco del ruolo', required: false })
    codiceRuolo?: string;

    @ApiProperty({ description: 'Descrizione del ruolo' })
    descrizioneRuolo: string;


    @ApiProperty({
        description: 'Lista di menù associati al ruolo',
        type: [AbilitazioneMenu]
    })
    menu: AbilitazioneMenu[];
}

