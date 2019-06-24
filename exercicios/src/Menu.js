import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Milti'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/validarProps'
import Evento from  './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'  //O Avo ficou entre {} pq foi exportado direto no componente não usou o default

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome='Jose' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento 
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Contador:{
        screen : () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto= 'React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numeros={30} />
    },
    Simples: {
        screen: () => <Simples texto='Flexivel' />
    }
}, { drawerWidth: 300})