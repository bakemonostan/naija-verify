import { SvgProps } from "./Icontype";

export default function HouseIcon({ width, height, color = '#0AB34E' }: SvgProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="uis:house-user">
                <path id="Vector" d="M25.219 12.6103L14.8337 3.37885C14.3721 3.03267 13.7952 3.03267 13.3336 3.37885L2.94829 12.6103C2.48672 13.0718 2.37133 13.7642 2.8329 14.2257C3.29447 14.6873 3.98682 14.8027 4.44839 14.3411L4.79457 13.8796V24.9573C4.79457 25.6496 5.25614 26.1112 5.9485 26.1112H22.1034C22.7958 26.1112 23.2574 25.6496 23.2574 24.9573V13.8796L23.6035 14.2257C24.0651 14.6873 24.7575 14.5719 25.219 14.1104C25.6806 13.7642 25.6806 12.9564 25.219 12.6103ZM14.026 13.418C15.7569 13.418 17.1416 14.8027 17.1416 16.5336C17.1416 18.2645 15.7569 19.6492 14.026 19.6492C12.2951 19.6492 10.9104 18.2645 10.9104 16.5336C10.9104 14.8027 12.2951 13.418 14.026 13.418ZM8.25635 23.8033C8.25635 23.6879 8.25635 23.6879 8.37174 23.5725C10.9104 20.4569 15.5261 19.88 18.6417 22.4186C19.1032 22.7648 19.4494 23.111 19.7956 23.5725C19.7956 23.5725 19.7956 23.6879 19.911 23.8033H8.25635Z" fill={color} />
            </g>
        </svg>

    )
}