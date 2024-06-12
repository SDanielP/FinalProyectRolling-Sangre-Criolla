const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { generateJwt } = require('../libs/jwt');

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const salt = 10;

        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save();

        newUser.password = undefined;

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: email });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });

    }

}

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({ message: 'NO ENVIASTE EL EMAIL o PASSWORD, para el logueo es requerido' });
        }

        if (email.length > 20) {
            return res.status(404).json({ message: "EMAIL INVALIDO" });
        }
        if (password.length > 20) {
            return res.status(404).json({ message: "PASSWORD INVALIDO" });
        }



        //const user = await User.findOne({ email: email})
        const user = await User.findOne({ email });

        if (!user) {
            console.log('usuario no encontrado');
            return res.status(401).json({ message: 'usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Email o Contraseña Incorrecta' });
        }

        const token = generateJwt({ id: user._id, role: user.role })

        res.status(201).json({ message: 'logueo exitoso', user: user, token: token });

    } catch (error) {

        res.status(500).json({ message: 'error en login de usuario' });

    }

}
const recuperarContra = async (req, res) => {

    try {
        console.log(req.body.formData.email)
        
        const { email } = req.body.formData;
        
        if (!email) {
            return res.status(404).json({ message: 'NO ENVIASTE EL EMAIL o PASSWORD, para la recuperacion es requerido' });
        }
        
        if (email.length > 20) {
            return res.status(404).json({ message: "EMAIL INVALIDO" });
        }

        //const user = await User.findOne({ email: email})
        const user = await User.findOne({ email });

        if (!user) {
            console.log('usuario no encontrado');
            return res.status(401).json({ message: 'usuario no encontrado' });
        }
       
        res.status(201).json({ message: 'Email de recuperación enviado con éxito.', user: user });

    } catch (error) {

        res.status(500).json({ message: 'Error en encontrar usuario registrado.' });

    }

}


module.exports = {
    register,
    login,
    recuperarContra
}