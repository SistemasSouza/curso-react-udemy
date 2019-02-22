import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='souza'>
        <Member name='Denis'/>
        <Member name='Max'/>
        <Member name='charlote'/>
    </Family>
    ,document.getElementById('app'))