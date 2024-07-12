import { Request, Response } from "express";
import { user} from "../database/models/user";


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.find({
      select: {
        id: true,
        email: true,
      },
    });
    return res.json({
      success: true,
      message: "All users retrived successfully!",
      data: users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error showing all users",
      error: error,
    });
  }
};

export const getUserProfile = async(req: Request, res: Response) => {
  try {
    const userId = req.tokenData.id;

    const thisUser = await user.findOne(
      {
        where: {
          id: userId
        }
      }
    ) 

    res.json(
      {
        success: true,
        message: "User profile retrieved",
        data: thisUser
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Profile cant be retrieved"
      }
    )
  }
}

export const updateUserById = async (req: Request, res: Response) => {
  try {
      const userId = req.tokenData.id;
      const body = req.body

      const userUpdated = await user.update(
        {
          id: userId
        },
        body
      )

      res.status(200).json(
        {
          success: true,
          message: "User updated",
          data: userUpdated
        }
      )      
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User cant be updated",
        error: error
      }
    )
  }
}