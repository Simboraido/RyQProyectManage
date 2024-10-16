import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './Table.css';
import { RadialBarChart, RadialBar,Legend,Tooltip } from 'recharts';
const EntregablesTable = () => {
    const [entregables, setEntregables] = useState([]);


    useEffect(() => {
        fetchEntregables();
    }, []);

    const fetchEntregables = async () => {
        const response = await axios.get('/api/entregables/');
        setEntregables(response.data);
    };

    /*
    
    0 dinero_gastado: 1352
    1 dinero_invertido: 10000
    2 eficacia: 0.48
    3 eficiencia_dinero: 0
    4 eficiencia_hh: 0
    5 estado_proyecto: "Init"
    6 hh_ganadas: 0
    7 hh_gastadas: 22
    8 hh_vendidas: 50
    9 id_documento: "Documento"
    10 nombre_documento: "Analisis de Presupuesto"
    11 proyecto: "Proyecto Represa Codelco"
    */
    //const datos = entregables.length > 0 ? entregables:false;
    console.log(entregables[0])
    const proyectos = [
        {
            eficacia:entregables[2]?.eficacia, 
            fill:"red",
            name:"eficacia"
        },
        {
            eficiencia_dinero:entregables[2]?.eficiencia_dinero,
            fill:"red",
            name:"eficacia"
        }
    ];


    return (
        <div className="table-container">
<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={proyectos} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={20} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='eficacia' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>

<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={proyectos} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={20} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='eficiencia_dinero' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>

<RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={proyectos} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={20} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='eficiencia_hh' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
            <h1 className="table-title">R&Q ENTREGABLES</h1>
            <Table striped bordered hover className="entregables-table">
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        <th>ID Documento</th>
                        <th>Nombre Documento</th>
                        <th>HH Vendidas</th>
                        <th>Dinero Invertido</th>
                        <th>Dinero Gastado</th>
                        <th>Estado</th>
                        <th>HH Gastadas</th>
                        <th>HH Ganadas</th>
                        <th>Eficiencia HH</th>
                        <th>Eficiencia Dinero</th>
                        <th>Eficacia</th>
                    </tr>
                </thead>
                <tbody>
                    {entregables.map((entregable, index) => (

                        <tr key={index} >
                            <td>{entregable.proyecto}</td>
                            <td>{entregable.id_documento}</td>
                            <td>{entregable.nombre_documento}</td>
                            <td>{entregable.hh_vendidas}</td>
                            <td>{entregable.dinero_invertido}</td>
                            <td>{entregable.dinero_gastado}</td>
                            <td>{entregable.estado_proyecto}</td>
                            <td>{entregable.hh_gastadas}</td>
                            <td>{entregable.hh_ganadas}</td>
                            <td style={entregable.eficiencia_hh < 1 ? { background: 'red' } : {}}>{entregable.eficiencia_hh}</td>
                            <td style={entregable.eficiencia_dinero < 1 ? { background: 'red' } : {}}>{entregable.eficiencia_dinero}</td>
                            <td style={entregable.eficacia < 1 ? { background: 'red' } : {}}>{entregable.eficacia}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
     
        </div>
    );
};

export default EntregablesTable;