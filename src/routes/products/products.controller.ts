import { Request, Response } from 'express';

export const listProducts = (req: Request, res: Response) => {
    res.send("List Products");
}

export const getSingleProduct = (req: Request, res: Response) => {
    res.send("Get Single Product");
}

export const createProduct = (req: Request, res: Response) => {
    res.send("Create Product");
}

export const updateProduct = (req: Request, res: Response) => {
    res.send("Update Product");
}

export const deleteProduct = (req: Request, res: Response) => {
    res.send("Delete Product");
}