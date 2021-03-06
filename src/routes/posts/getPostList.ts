import { Request, Response } from 'express';
import {Posts, PostDocument} from "../../models/post";

export default async (req: Request, res: Response): Promise<void> => {
    const postList: PostDocument[] = await Posts.find({});

    res.status(200).json({postList: postList, count: postList.length });
};