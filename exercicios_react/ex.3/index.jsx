import React from 'react'
import ReactDOM from 'react-dom'
import {PrimeiroComponent, SegundoComponent} from './component'

ReactDOM.render(
    <div>
        <PrimeiroComponent/>
        <SegundoComponent/>
    </div>
    ,document.getElementById('app')
)