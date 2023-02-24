"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const note_exception_1 = require("../note/exception/note.exception/note.exception");
let NoteService = class NoteService {
    constructor() {
        this.notes = [];
    }
    getNotes() {
        return this.notes;
    }
    addNote(content) {
        content.id = this.generateId().toString();
        this.notes.push(content);
        return content;
    }
    removeNote(id) {
        const resultingArray = this.notes.filter(c => c.id !== id);
        if (resultingArray.length === this.notes.length) {
            throw new note_exception_1.NoteException('No note found');
        }
        this.notes = resultingArray;
    }
    generateId() {
        const currentSize = this.notes.length;
        if (!currentSize) {
            return 0;
        }
        return Number(this.notes[currentSize - 1].id) + 1;
    }
};
NoteService = __decorate([
    (0, common_1.Injectable)()
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map