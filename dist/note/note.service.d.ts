import { Note } from '../note/dto/note/note';
export declare class NoteService {
    private notes;
    getNotes(): Note[];
    addNote(content: Note): Note;
    removeNote(id: string): void;
    private generateId;
}
