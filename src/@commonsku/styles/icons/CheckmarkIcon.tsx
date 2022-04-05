import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { green } from '../colors';

type AddIconProps = SVGIconProps;
export default function AddIcon({
    color=green.main,
    size="medium",
    altText="Checked checkbox",
    ...props
}: AddIconProps) {
    return <SVG size={size} aria-labelledby="CheckmarkIcon" {...props}>
        <title id="CheckmarkIcon">{altText}</title>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            d="m21.284 5.89-10 10a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12 9.29-9.29a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41Zm-5.52-3.15c-1.69-.69-3.61-.93-5.61-.57-4.07.73-7.32 4.01-8.01 8.08a10.009 10.009 0 0 0 11.19 11.66c3.96-.51 7.28-3.46 8.32-7.31.4-1.47.44-2.89.21-4.22-.13-.8-1.12-1.11-1.7-.54-.23.23-.33.57-.27.89.22 1.33.12 2.75-.52 4.26-1.16 2.71-3.68 4.7-6.61 4.97-5.1.47-9.33-3.85-8.7-8.98.43-3.54 3.28-6.42 6.81-6.91 1.73-.24 3.37.09 4.77.81a1.003 1.003 0 0 0 .93-1.78c-.27-.12-.54-.25-.81-.36Z"
            fill={color}
        />
    </SVG>
}
