import * as React from 'react';
import { Svg } from 'react-native-svg';
 
import caret from './commom/caret.js'    
import logo from './commom/logo.js'    
 

const icons = {  
    caret,
    logo
}

export default (props) => props.icon && icons[props.icon] ? <Svg viewBox={icons[props.icon].viewBox}
    width={ props.width ? props.width : "100%"} 
    height={ props.height ? props.height : "100%"} 
    style={props.style} 
    fill={props.fill ? props.fill : ""}
    stroke={props.stroke ? props.stroke : ""}
    line={props.line ? props.line : ""} 
    >{icons[props.icon].svg}
</Svg> : null ;