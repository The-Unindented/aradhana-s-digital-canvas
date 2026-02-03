import { SVGProps } from 'react';

interface StarProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: number;
    stroke?: string;
    strokeWidth?: number;
    pathClassName?: string;
}

// 4-pointed star
export const Star4 = ({
    color = 'currentColor',
    size = 24,
    stroke,
    strokeWidth = 0,
    pathClassName,
    ...props
}: StarProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...props}
    >
        <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            className={pathClassName}
        />
    </svg>
);

// 6-pointed star
export const Star6 = ({
    color = 'currentColor',
    size = 24,
    stroke,
    strokeWidth = 0,
    pathClassName,
    ...props
}: StarProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...props}
    >
        <path
            d="M12 0L14 8L22 8L16 13L18 21L12 17L6 21L8 13L2 8L10 8L12 0Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            className={pathClassName}
        />
    </svg>
);

// 8-pointed star (like neobrutalism)
export const Star8 = ({
    color = 'currentColor',
    size = 24,
    stroke,
    strokeWidth = 0,
    pathClassName,
    ...props
}: StarProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill={color}
        {...props}
    >
        <path
            d="M100 0L117.63 58.78L175.53 24.47L141.22 82.37L200 100L141.22 117.63L175.53 175.53L117.63 141.22L100 200L82.37 141.22L24.47 175.53L58.78 117.63L0 100L58.78 82.37L24.47 24.47L82.37 58.78L100 0Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            className={pathClassName}
        />
    </svg>
);

// Sparkle star
export const Sparkle = ({
    color = 'currentColor',
    size = 24,
    stroke,
    strokeWidth = 0,
    pathClassName,
    ...props
}: StarProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...props}
    >
        <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            className={pathClassName}
        />
    </svg>
);

// Rounded star
export const StarRounded = ({
    color = 'currentColor',
    size = 24,
    stroke,
    strokeWidth = 0,
    pathClassName,
    ...props
}: StarProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...props}
    >
        <path
            d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L16.82 19.02L12 15.77L7.18 19.02L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            className={pathClassName}
        />
    </svg>
);

export default { Star4, Star6, Star8, Sparkle, StarRounded };
