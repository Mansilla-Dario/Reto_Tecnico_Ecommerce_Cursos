import { Authors } from "../models/Authors.js";

export const getAuthors = async (req, res) =>{
  try {
    const authors = await Authors.findAll();
    res.json(authors);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createAuthor = async (req, res) =>{
  try {
    const {firstName, lastName, email, website} = req.body;
    const newAuthor = await Authors.create({firstName, lastName, email, website});
    res.json(newAuthor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getAuthor = async (req, res) =>{
  try {
    const { id } = req.params;
    const author = await Authors.findByPk(id);

    if(!author){
      return res.status(404).json({ message:'El Autor buscado no existe' });
    }

    res.json(author);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const updateAuthor = async (req, res) =>{
  try {
    const { id } = req.params;
    const author = await Authors.findByPk(id);

    author.set(req.body);
    await author.save();

    res.json(author);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteAuthor = async (req, res) =>{
  try {
    const { id } = req.params;
    await Authors.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}