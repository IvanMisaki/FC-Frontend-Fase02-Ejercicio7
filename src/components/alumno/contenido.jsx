import React, {useEffect, useState } from 'react'
import $ from 'jquery';
import { Link } from "react-router-dom";

export function Contenido() {

    const [alumnos, setAlumnos] = useState([])//estática
    const [tablaAlumnos, setTablaAlumnos] = useState([])//dinámica
    const [busqueda, setBusqueda] = useState([])//filtrada

    const poticionGet=()=>{
        var myJson = {datos: [
            {"id":"1","nombre":"Álvaro Sánchez Monteagudo","ciudad":"Valencia","pais":"España","telefono":"+34657852546","email":"smontegudo@gmail.com","etiquetas":["ANGULAR","REACT","HTML&CSS"],"etiquetas_buscar":"ANGULAR,REACT,HTML&CSS"}, 
            {"id":"2","nombre":"Amparo Herra Climent","ciudad":"Sevilla","pais":"España","telefono":"+34123456789","email":"aherrera@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT"}, 
            {"id":"3","nombre":"Ana Gutierrez Lozano","ciudad":"Madrid","pais":"España","telefono":"+34987541236","email":"agutierrez@gmail.com","etiquetas":["REACT","SYMFONY"],"etiquetas_buscar":"REACT,SYMFONY"}, 
            {"id":"4","nombre":"Antonio Miguel Lacunza","ciudad":"Barcelona","pais":"España","telefono":"+34758426985","email":"amiguel@gmail.com","etiquetas":["ANGULAR","REACT"],"etiquetas_buscar":"ANGULAR,REACT"}, 
            {"id":"5","nombre":"Antonio Delgado Jimeno","ciudad":"Oviedo","pais":"España","telefono":"+34542874517","email":"adelgado@gmail.com","etiquetas":["ANGULAR","HTML&CSS"],"etiquetas_buscar":"ANGULAR,HTML&CSS"}, 
            {"id":"6","nombre":"Belén Jerez Rivera","ciudad":"Jaen","pais":"España","telefono":"+34968574215","email":"bjerez@gmail.com","etiquetas":["HTML&CSS"],"etiquetas_buscar":"HTML&CSS"}, 
            {"id":"7","nombre":"Carla Barroso Soriano","ciudad":"Gijón","pais":"España","telefono":"+34485926157","email":"cbarroso@gmail.com","etiquetas":["REACT"],"etiquetas_buscar":"REACT"}, 
            {"id":"8","nombre":"Carlos Yuste Guerrero","ciudad":"Valencia","pais":"España","telefono":"+34487596854","email":"cyuste@gmail.com","etiquetas":["ANGULAR"],"etiquetas_buscar":"ANGULAR"}, 
            {"id":"9","nombre":"Carmina Pérez Lopez","ciudad":"Sevilla","pais":"España","telefono":"+34154785426","email":"cperez@gmail.com","etiquetas":["FLUTTER"],"etiquetas_buscar":"FLUTTER"}, 
            {"id":"10","nombre":"Iker Casillas","ciudad":"Madrid","pais":"España","telefono":"+34154859263","email":"ikasillas@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT"}]};

        console.log(myJson)
        setAlumnos(myJson.datos)
        setTablaAlumnos(myJson.datos)
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        //console.log("Busqueda : "+e.target.value);
    }

    const filtrar=(filtro)=>{
        var resultado = tablaAlumnos.filter((elemento)=>{
            if(elemento.nombre.toLowerCase().includes(filtro.toLowerCase())
            || elemento.ciudad.toLowerCase().includes(filtro.toLowerCase())
            || elemento.pais.toLowerCase().includes(filtro.toLowerCase())
            || elemento.telefono.toLowerCase().includes(filtro.toLowerCase())
            || elemento.email.toLowerCase().includes(filtro.toLowerCase())
            || elemento.etiquetas_buscar.toLowerCase().includes(filtro.toLowerCase())){
                return elemento;
            }
        });
        setAlumnos(resultado);
    }

    function handleOnClick (userid) {
        this.context.router.transitionTo("/");
      }

    useEffect(() => {
        poticionGet();

        $('th').click(function() {
            var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) {
            rows = rows.reverse()
            }
            for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
            }
            setIcon($(this), this.asc);
        })

    },[])
    
      function comparer(index) {
        return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc) {
        $("th").each(function(index) {
        $(this).removeClass("sorting");
        $(this).removeClass("asc");
        $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }

    return (
        <div>
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="form-group col-sm-12 col-md-6">
                        <table style={{width:'100%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label 
                                            style={{fontWeight:'bold', paddingRight:'20px'}} 
                                            htmlFor="exampleInputEmail1">Alumnos</label></td>
                                    <td>
                                        <input id="txtAlumno" 
                                        value={busqueda}
                                        //onKeyUp={() => fn_Buscar()}  
                                        onChange={handleChange}
                                        placeholder='Buscar por Nombre, Email o Palabra clave...' 
                                        style={{background:'#e6e6ea'}} type="text" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-6"></div>
                </div>
                
                <br/>
                <div className="panel panel-default">
                    <div className="panel-body"
                    style={{border:'solid 1px #e6e6ea', borderRadius:'20px', background:'white', overflow:'auto'}}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>CIUDAD</th>
                            <th>PAIS</th>
                            <th>TELEFONO</th>
                            <th>CORREO ELECTRÓNICO</th>
                            <th>ETIQUETAS</th>
                            <th style={{display:'none'}}>ETIQUETAS oculto</th>
                            <th style={{display:'none'}}>DETALLE</th>
                        </tr>
                        </thead>
                        <tbody id="idBody">
                            {alumnos && alumnos.map((alumno)=>(
                                <tr 
                                    style={{cursor:'pointer'}}
                                    key={alumno.id}
                                    className="sombrear">
                                    <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.nombre}</div></Link></td>
                                    <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.ciudad}</div></Link></td>
                                    <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.pais}</div></Link></td>
                                    <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.telefono}</div></Link></td>
                                    <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.email}</div></Link></td>
                                    <td style={{display:'none'}}>{alumno.etiquetas_buscar}</td>
                                    <td><Link style={{textDecoration:'none', width:'100%'}} to={"/ficha/"+alumno.id}><div style={{display:'flex'}}>{
                                        alumno.etiquetas.map((etiqueta)=>(
                                            <div key={Math.random()+""} style={{width:'minContent',
                                                         background:'#32d4a4',
                                                         margin:'0px 5px 0px 0px',
                                                         color:'white',
                                                         padding:'0px 5px 0px 5px',
                                                         borderRadius: '5px',
                                                         fontSize:'15px'
                                                        }}>{etiqueta}</div>
                                        ))
                                        }</div></Link></td>
                                    <td style={{display:'none'}}>{alumno.etiquetas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
