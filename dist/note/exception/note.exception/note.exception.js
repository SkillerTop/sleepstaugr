"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteException = void 0;
class NoteException extends Error {
    constructor(message = ``) {
        super();
        this.message = message;
    }
    what() {
        return this.message;
    }
}
exports.NoteException = NoteException;
//# sourceMappingURL=note.exception.js.map