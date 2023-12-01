import { Request, Response } from "express";
import { User } from "../model/User";
import { userRepository } from "../repositories/UserRepository";
import generateAccessToken from "../helper/generateAccessToken";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const new_user = new User();
      new_user.name = req.body.name;
      new_user.passWord = req.body.passWord;

      await new userRepository().save(new_user);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created user!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new userRepository().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted user!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_user = await new userRepository().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched user by id!",
        data: new_user,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_user = await new userRepository().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all user data!",
        data: new_user,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_user = new User();

      new_user.id = id;
      new_user.name = req.body.name;
      new_user.passWord = req.body.passWord;

      await new userRepository().update(new_user);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated user data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
  async login(req: Request, res: Response) {
    try {
      
      const username = req.body.name;
      const user= {name: username};
     
      const accessToken = generateAccessToken(user)
      //const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
     // refreshTokens.push(refreshToken)
      res.json({ accessToken: accessToken })
 
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
 

}

export default new UserController()