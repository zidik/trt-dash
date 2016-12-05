import * as React from "react";

export interface IBallPosition {
        readonly x: number
        readonly y: number
}
export interface IBallProps {
    readonly position: IBallPosition
}

export default ({position:{x, y}}: IBallProps ) => 
    <g transform={`translate(${x} ${y})`}>
        <circle 
            r={0.04} 
            fill="Orange"
            stroke="brown"
            strokeWidth="0.01"
        />
    </g>;