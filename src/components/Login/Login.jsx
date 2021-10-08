import React from 'react'
import Titulo from '../Generales/Titulo'

const Login = () => {
    return (
        <>
            <form className=" container col-lg-6 d-flex position-absolute top-50 start-50 translate-middle justify-content-center my-4 rounded">
                <div className="row d-flex flex-column ">
                    <Titulo nombre="User Login" />
                    <div class="mb-3 ">
                        <label for="usuario" class="form-label">Email</label>
                        <input type="email" class="form-control w-80" id="usuario" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control w-80" id="InputPassword" />
                    </div>
                    <div id="emailHelp" class="form-text">Ingresa con tu cuenta de Gmail.</div>
                    <div className=" d-md-flex ml-3">

                        <button className="w-50 rounded-pill m-2">Login</button>

                        <button className="w-50 rounded-pill m-2">Gmail</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;