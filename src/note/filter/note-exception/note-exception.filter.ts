import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NoteException } from '../../exception/note.exception/note.exception';

@Catch(NoteException)
export class NoteExceptionFilter implements ExceptionFilter {
  catch(exception: NoteException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response
      .status(500)
      .json({
        timestamp: new Date().toISOString(),
        msg: exception.what()
      });
  }
}