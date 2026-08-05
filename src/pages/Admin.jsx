import '../estilos/hero.css'
import '../estilos/admin.css'
import { useState } from 'react';

function Admin(){
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Contraseña:", contrasenia);
  };

    return (
      <section className="hero" id="admin">
        <img
          src="/imagenes/Cabecera.webp"
          className="hero-bg"
          alt="cabecera"
        />

        <img src="/imagenes/titulo_ljubav.webp" className='login-title' fetchPriority="high" alt="Ljubav" width={445} height={301}/>


        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <h2>Panel de administración</h2>

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              required
            />

            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </section>
    )
}

export default Admin;