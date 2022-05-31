import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type PercentIconProps = SVGIconProps;
export default function PercentIcon({
    color=teal.main,
    size="medium",
    altText="Percent",
    ...props
}: PercentIconProps) {
    return <SVG size={size} aria-labelledby="PercentIcon" {...props}>
        <title id="PercentIcon" >{altText}</title>
        <path
            d="M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4Zm0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9Zm9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5Zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM5.41 20 4 18.59 18.59 4 20 5.41 5.41 20Z"
            fill={color}
        />
    </SVG>
}
