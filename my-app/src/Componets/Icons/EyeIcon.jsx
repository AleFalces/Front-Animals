import React from 'react';

const EyeIcon = ({ classes, width = '18', color = "#c3cad9" }) => (
    <svg className={classes} width={width} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.8125 6.1875C11.8125 6.93342 11.5162 7.64879 10.9887 8.17624C10.4613 8.70368 9.74592 9 9 9C8.25408 9 7.53871 8.70368 7.01126 8.17624C6.48382 7.64879 6.1875 6.93342 6.1875 6.1875C6.1875 5.44158 6.48382 4.72621 7.01126 4.19876C7.53871 3.67132 8.25408 3.375 9 3.375C9.74592 3.375 10.4613 3.67132 10.9887 4.19876C11.5162 4.72621 11.8125 5.44158 11.8125 6.1875V6.1875Z"
            fill={color}
        />
        <path
            d="M0 6.1875C0 6.1875 3.375 0 9 0C14.625 0 18 6.1875 18 6.1875C18 6.1875 14.625 12.375 9 12.375C3.375 12.375 0 6.1875 0 6.1875ZM9 10.125C10.0443 10.125 11.0458 9.71016 11.7842 8.97173C12.5227 8.23331 12.9375 7.23179 12.9375 6.1875C12.9375 5.14321 12.5227 4.14169 11.7842 3.40327C11.0458 2.66484 10.0443 2.25 9 2.25C7.95571 2.25 6.95419 2.66484 6.21577 3.40327C5.47734 4.14169 5.0625 5.14321 5.0625 6.1875C5.0625 7.23179 5.47734 8.23331 6.21577 8.97173C6.95419 9.71016 7.95571 10.125 9 10.125V10.125Z"
            fill={color}
        />
    </svg>
);

export default EyeIcon;
