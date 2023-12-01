import {Request, Response} from "express"
import { Note } from "../model/Note"
import { NoteRepository } from "../repositories/NoteRepository";

class NoteController {
  async create(req: Request, res: Response){
      try{
        const new_note = new Note();
        new_note.name = req.body.name;
        new_note.description = req.body.description;
        console.log("%%%", req.body.name)

        await new NoteRepository().save(new_note);
        res.status(201).json({
            status: "Created!",
            message:"Successfully created note!"
        })
      }catch(error){
          res.status(500).json({
            status: "Internal Server Error!!",
            message:"nternal Server Error!"
          })

      }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_note = await new NoteRepository().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all note data!",
        data: new_note,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}
export default new NoteController()