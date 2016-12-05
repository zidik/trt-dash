import * as React from "react"
export default ({x = -0.05, y=1.5, flipX=false, width=0.720, depth=0.26, color="yellow"}) =>
    <g 
        stroke={color} 
        fill={color}
        fillOpacity="0.2"
        strokeWidth="0.02">
        <path
            transform={`translate(${x} ${y}) scale(${flipX?-1:1}, 1)`}
            d={`
                M 0 ${-width/2}
                h ${-depth} 0
                v 0 ${width}
                h ${depth} 0
            `}
        />
    </g>;