import prisma from "@app/config/database";
import { Request, Response } from "express";
import { ArticleSchema } from "@app/schemas/article";

async function GetAll(req: Request, res: Response): Promise<void> {
  try {
    const articles = await prisma.article.findMany({});
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function SaveArticle(req: Request, res: Response): Promise<void> {
  try {
    const valid = ArticleSchema.validate(req.body);

    if (valid.error) {
      res.status(400).send({ error: valid.error?.message });
      return;
    }

    const { name, description, price } = req.body;

    await prisma.article.create({
      data: {
        name,
        description,
        price,
        purchased: false,
      },
    });

    res.status(201).send({ message: "Guardado exitosamente" });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function GetById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const article = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(article);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function UpdateArticle(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { name, description, price, purchased } = req.body;

    const exists = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!exists) {
      res.status(400).send({ message: "No existe el artículo" });
      return;
    }

    await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        price,
        purchased,
      },
    });

    res.status(200).send({ message: "Actualizado con éxito" });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function DeleteArticle(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    const exists = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!exists) {
      res.status(400).send({ message: "No existe el artículo" });
      return;
    }

    await prisma.article.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).send({ message: "Eliminado con éxito" });
  } catch (error) {
    res.status(500).send({ error });
  }
}

export { GetAll, SaveArticle, GetById, UpdateArticle, DeleteArticle };
