"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const note_exception_1 = require("../../exception/note.exception/note.exception");
let NoteExceptionFilter = class NoteExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response
            .status(500)
            .json({
            timestamp: new Date().toISOString(),
            msg: exception.what()
        });
    }
};
NoteExceptionFilter = __decorate([
    (0, common_1.Catch)(note_exception_1.NoteException)
], NoteExceptionFilter);
exports.NoteExceptionFilter = NoteExceptionFilter;
//# sourceMappingURL=note-exception.filter.js.map