import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { white } from '../colors';

type NavManagementIconProps = SVGIconProps & {filled?: boolean};
export default function NavManagementIcon({
    color=white.main,
    size="medium",
    filled=false,
    altText="Management",
    ...props
}: NavManagementIconProps) {
    const renderPath = filled ? 
    <>
      <path d="M16 12h2v2h-2v-2ZM16 16h2v2h-2v-2Z" fill={color} /><path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-8Zm0 2h8v10h-8v-2h2v-2h-2v-2h2v-2h-2v-2ZM8 6H6v2h2V6Zm-2 8h2v2H6v-2Zm2 4H6v2h2v-2Zm-2-8h2v2H6v-2Z"
        fill={color} />
    </>
    : 
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h8ZM10 20H8v-2H6v2H4V6h2v2h2V6h2v14Zm2-4v-2h2v-2h-2v-2h8v10h-8v-2h2v-2h-2Zm-4-2v2H6v-2h2Zm0-4v2H6v-2h2Zm8 2v2h2v-2h-2Zm2 4v2h-2v-2h2Z"
      fill={color}
    />
    ;

    return <SVG size={size} aria-labelledby="NavManagementIcon" {...props} >
        
        <title id="NavManagementIcon" >{altText}</title>
        {renderPath}
    </SVG>
}
