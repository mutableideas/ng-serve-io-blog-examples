import { Body, Controller, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('handler')
export class HandlerController {
  @Post()
  public post(@Body() entity: { id: string }): Observable<string> {
    console.log('handling entity!');
    return of(`Entity Handled: ${entity.id}`);
  }
}
