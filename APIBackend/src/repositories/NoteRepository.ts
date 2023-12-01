import { Note } from "../model/Note";

interface INoteRepository {
    save(note : Note) : Promise<void>;
//     update(note: Note) : Promise<void>;
//     delete(noteId: number): Promise<void>;
//     retrieveById(noteId: number): Promise<Note>;
       retrieveAll(): Promise<Note[]>;
 }

export class NoteRepository implements INoteRepository {
    async save(note: Note): Promise<void> {
        try {
          await Note.create({
            name: note.name,
            description: note.description,
          });
        } catch (error) {
          throw new Error("Failed to create note!");
        }
      }

      async retrieveAll() : Promise<Note[]> {
          try{
            return await Note.findAll();
          } catch (error){
            throw new Error("Failed to find note!");
          }
          
      }
}