import { NoteService } from './note.service';
import { Note } from '../note/dto/note/note';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    findAll(): Note[];
    create(note: Note): Note;
    delete(id: string): void;
}
