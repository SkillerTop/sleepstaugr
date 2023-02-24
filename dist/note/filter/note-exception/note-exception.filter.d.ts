import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { NoteException } from '../../exception/note.exception/note.exception';
export declare class NoteExceptionFilter implements ExceptionFilter {
    catch(exception: NoteException, host: ArgumentsHost): void;
}
