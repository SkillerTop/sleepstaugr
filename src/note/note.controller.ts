import { Controller, Get, Post, Body, Delete, Param, UseFilters } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../note/dto/note/note'
import { NoteExceptionFilter } from '../note/filter/note-exception/note-exception.filter';

@Controller('note')
@UseFilters(new NoteExceptionFilter())
export class NoteController {

    constructor(private readonly noteService: NoteService) {}

    @Get()
    public findAll(): Note[] {
        return this.noteService.getNotes();
    }

    @Post()
    create(@Body() note: Note) {
        return this.noteService.addNote(note);
    }

    @Delete(':id')
    public delete(@Param('id') id: string): void {
        this.noteService.removeNote(id);
    }
}