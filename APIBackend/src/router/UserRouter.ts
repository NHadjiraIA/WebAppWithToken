import validate from "../helper/validate";
import BaseRoutes from "./base/BaseRouter";
import { createUserSchema, updateUserSchema} from "../schema/UserSchema"
import UserController from "../controller/UserController";


class UserRouter extends BaseRoutes {
    public routes(): void {
        this.router.post("",validate(createUserSchema), UserController.create);
 
    this.router.patch(
        "/:id",
        validate(updateUserSchema), 
        UserController.update
      );
      this.router.delete("/:id", UserController.delete);
      this.router.get("", UserController.findAll);
      this.router.get("/:id", UserController.findById);
      this.router.post("/login", UserController.login);
    }
}export default new UserRouter().router


 