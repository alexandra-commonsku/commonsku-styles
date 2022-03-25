import styled, { CSSObject } from 'styled-components';

export const iconSize = {
    tiny: {
        width: 14,
        height: 14,
        viewBox: "0 0 24 24",
    },
    small: {
        width: 16,
        height: 16,
        viewBox: "0 0 24 24",
    },
    medium: {
        width: 24,
        height:24,
        viewBox: "0 0 24 24",
    },
    large: {
        width: 32,
        height:32,
        viewBox: "0 0 24 24",
    },
    huge: {
        width: 48,
        height:48,
        viewBox: "0 0 24 24",
    },
    default: {
        height: 24,
        width: 24,
        viewBox: "0 0 24 24",
    },
    // orderStageUnselected: {
    //     width: 64,
    //     height: 64,
    //     viewBox: "0 0 64 64"
    // },
    // orderStageSelected: {
    //     width: 72,
    //     height: 72,
    //     viewBox: "0 0 80 80"
    // }
};

export type TIconSizeObj = typeof iconSize;
export type TIconSize = keyof typeof iconSize;

type BaseSVGIconProps = {
    size?: TIconSize;
    width?: string | number;
    height?: string | number;
    iconSizes?: TIconSizeObj;
};

export type SVGIconProps = React.SVGAttributes<SVGElement> & BaseSVGIconProps;

const SVG = styled.svg.attrs<BaseSVGIconProps>(p => {
    const iconSizes = p.iconSizes || iconSize;
    const size = p.size ? iconSizes[p.size] : null;
    if (size) {
        return {
            viewBox: size.viewBox,
        };
    }
    const defaultSize = iconSizes['default'];
    return {
        viewBox: p.viewBox || defaultSize.viewBox,
    };
})<BaseSVGIconProps>(
    p => {
        const styles: CSSObject = {};
        const iconSizes = p.iconSizes || iconSize;
        const size = p.size ? iconSizes[p.size] : null;
        if (size) {
            styles['height'] = size.height;
            styles['width'] = size.width;
        } else {
            const defaultSize = iconSizes['default'];
            styles['height'] = p.height !== undefined && p.height !== '' ? p.height : defaultSize.height;
            styles['width'] = p.width !== undefined && p.width !== '' ? p.width : defaultSize.width;
        }
        return styles;
    },
);

export default SVG;
