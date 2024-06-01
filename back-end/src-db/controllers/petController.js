const Pet = require("../models/petModel");
const User = require("../models/userModel");




















async function createPet (req, res){
    try {
        const {name, description, owner} = req.body;
    }

    console.log(name,description, owner);

    const userExists = await User.findById(owner);
    if (!userExists) {
        return res.status(404).json ({message: "Propietario no encontrado"})
    }

    const newPet = new Pet({
        name,
        description,
        owner,
    });

    const savedPet = await newPet.save();

    userExists.pets.push(savedPet._id);

    await userExists.save();

    res.status(201).json ({message: "Mascota creada exitosamente", pet: newPet});
} catch (error) {
    res.status(500).json ({message: "Error al crear la mascota", error: error.message})
}