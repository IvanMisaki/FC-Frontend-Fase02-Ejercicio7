import React, {useEffect } from 'react';
import stylesLI from "../loginIzquierda.module.css";
import styles from "./alumnos.module.css";
import { useParams } from "react-router";

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";
import { Usuario } from './usuario';
import { Contenido } from './contenido';

export function Alumnos(){

    useEffect(() => {
        //var URLactual = window.location;
        //alert(URLactual)
        //return false;

      });
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h3 className={styles.textLeft}>
                        <span>OpenBootcamp</span>
                        <span className={stylesLI.mi_verde}> | Alumnos</span>
                    </h3>
                </div>
                <div className='col'>
                    <Usuario></Usuario>
                </div>
            </div>
            <Contenido></Contenido>
        </div>
    );
}