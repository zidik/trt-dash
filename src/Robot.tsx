import * as React from "react";

export interface IRobotPosition { 
    readonly x: number
    readonly y: number
    readonly w: number
}
export interface IRobotProps {
    readonly position?: IRobotPosition
    readonly color?:string
}

export default ({position:{x=0, y=0, w=0}, color="RoyalBlue"}: IRobotProps) => 
    <g transform={`translate(${x} ${y})`}>
        <circle 
            r={0.20} 
            fill={color} 
            fillOpacity="0.6" 
            stroke="black"
            strokeWidth="0.01"
        />
        <line
            transform={`rotate(${w * 180 / Math.PI})`}
            x2={0.19}
            stroke="white"
            //strokeLinecap="round"
            strokeWidth="0.04"/>
    </g>;