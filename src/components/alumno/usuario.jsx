import React from 'react'
//import styles from "./usuario.module.css";
import "./alumnos.scss"

import { Link } from "react-router-dom";

export function Usuario() {
    return (
        <div className="header0 header">
                <nav>
                    <ul className="nav ul">
                        <li>
                            <div className="ul_li_div">
                                <div className="ul_li_div_div">NA</div>
                                <a id="a_UserName" href={"#"} className="ul_li_div_div_a">Alex de OB</a>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                            <ul className="ul_2" style={{backgroundColor: 'white'}}>
                                <li>
                                    <Link style={{color:'black'}} to={"/"}>
                                        Cerrar Sesión
                                    </Link>
                                </li>
                                <li>
                                    <a href='#' style={{color:'black'}}>Cambiar Contraseña</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}
