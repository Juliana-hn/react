import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { Toaster, toast } from 'sonner'

const Register = () => {
    const [users, setUsers] = useState ({
        email: '',
        password:'',
        validate: ''
    })
    
    const handleChange = (e) => {
        setUsers({...users, [e.target.name] : e.target.value});
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault()

      const {email, password, validate} = users

      if(!email.trim() || !password.trim() || !validate.trim()) {
        toast.warning ('Debe completar todos los campos')
        return;
      }
      if(password !== validate){
        toast.warning ('Deben coincidir las contraseñas')
        return;
      }

      if (password.length < 6) {
        toast.warning('La contraseña debe tener al menos 6 caracteres');
        return;  
    }
      toast.success('Se ha registrado con éxito')
      setUsers({email:'', password:'', validate:''});
    }

    return (
        <div className="container mt-4">
            <h2>Register</h2> <hr />
            <Toaster position="top-center" richColors expand={true}/>
            <Form onSubmit={handleSubmit}>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={users.email}
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
                        value={users.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPasswordCustom">Contraseña</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="validatePasswordCustom"
                        type="password"
                        name="validate"
                        placeholder="Confirmar contraseña"
                        value={users.validate}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPasswordCustom">Contraseña</label>
                </Form.Floating>

                <button 
                  className="btn btn-primary mt-3" 
                  type='submit'>
                    Enviar
                </button>
            </Form>
        </div>
    );
};
 export default Register