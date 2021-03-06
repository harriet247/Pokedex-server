import { Request, Response } from 'express';
import {Pokemon, PokemonDocument} from "../../models/pokemon";

export default async (req: Request, res: Response): Promise<void> => {
    const pokemonList: PokemonDocument[] = await Pokemon.find({ });

    res.status(200).json({ pokemonList, count: pokemonList.length });
};
