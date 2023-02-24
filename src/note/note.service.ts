import { Injectable } from '@nestjs/common';
import { Note } from '../note/dto/note/note';
import { NoteException } from '../note/exception/note.exception/note.exception';

@Injectable()
export class NoteService {
    private notes : Note[] = [];

    public getNotes(): Note[]{
        return this.notes;
    }

    public addNote(content : Note): Note { 
        content.id = this.generateId().toString();
        this.notes.push(content);
        return content;
    }

    public removeNote(id : string): void {
        const resultingArray: Note[] = this.notes.filter(c => c.id !== id);

        if (resultingArray.length === this.notes.length){
            throw new NoteException('No note found');
        }
        
        this.notes = resultingArray;
    }

    private generateId(): number {
        const currentSize = this.notes.length;
        if (!currentSize){
            return 0;
        }
        
        return Number(this.notes[currentSize - 1].id)+ 1;
    }
}