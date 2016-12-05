import * as React from "react"
export default ({width = 4.5, height = 3.0, line_width = 0.05}) =>
    <g strokeWidth="0.05" fill="none">
        <g stroke="#1a1a1a" >
            <rect 
                transform={`translate(${-line_width/2} ${-line_width/2})`}
                width = {width+line_width}
                height = {height+line_width}
            />
        </g>
        <g stroke="#f7f7f7">
            <rect 
                transform={`translate(${line_width/2} ${line_width/2})`}
                width = {width-line_width}
                height = {height-line_width}
            />
            <line x1={width/2} y1={line_width/2} x2={width/2} y2={height-line_width/2} />
            <circle cx={width/2} cy={height/2} r={(0.8 - line_width)/2} />
            <PenaltyArea x={line_width} y={height/2}/>
            <PenaltyArea x={width-line_width} y={height/2} flipX={true}/>
        </g>
    </g>

const PenaltyArea = ({x=0, y=0, flipX=false, radius=0.475, width=1.3}) =>
    <path
        transform={`translate(${x} ${y}) scale(${flipX?-1:1}, 1)`}
        d={`
            M 0 ${-width/2}
            A ${radius}, ${radius},0, 0, 1, ${radius}, ${-width/2+radius}
            v ${width-2*radius}
            A ${radius}, ${radius},0, 0, 1, 0, ${width/2}
        `}
    />;