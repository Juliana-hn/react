import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Toaster, toast } from 'sonner';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        if (!email.trim() || !password.trim()) {
            toast.warning('Debe completar todos los campos');
            return;
        }

        if (password.length < 6) {
            toast.warning('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        toast.success('Login exitoso');
        setUser({ email: '', password: '' });
    };

    return (
        <div className="container mt-4">
            <h2>Login</h2> <hr />
            <Toaster position="top-center" richColors expand={true} />
            <Form onSubmit={handleSubmit}>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingInputCustom">Correo electrónico</label>
                </Form.Floating>
                
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPasswordCustom">Contraseña</label>
                </Form.Floating>

                <button className="btn btn-primary mt-3" type='submit'>
                    Login
                </button>
            </Form>
        </div>
    );
};

export default Login;
