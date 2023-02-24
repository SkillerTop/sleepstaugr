export declare class NoteException extends Error {
    readonly message: string;
    constructor(message?: string);
    what(): string;
}
