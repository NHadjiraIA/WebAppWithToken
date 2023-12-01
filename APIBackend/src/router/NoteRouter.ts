import validate from "../helper/validate";
import BaseRoutes from "./base/BaseRouter";
import { createNoteSchema} from "../schema/NoteSchema"
import NoteController from "../controller/NoteController";

class NoteRouter extends BaseRoutes {
    public routes(): void {
        this.router.post("",validate(createNoteSchema), NoteController.create);
        this.router.get("",NoteController.findAll)
        
    }
}export default new NoteRouter().router