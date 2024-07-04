import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({className, href, onClick, children, px, white}) => {
    const classes = `button relative inline-flex items-center justify-center h-11 
    transition-colors hover:text-slate-600 
    ${white ? "text-n-8" : "text-n-1"}
    ${px || 'px-7'} ${className || ''} 
    rounded-full border-2 border-rose-500`;

    const spanClasses = "relative z-10";

    const renderButton = () => (
    <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
  );

    const renderLinkButton = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
        </a>
    )

  return href 
  ? renderLinkButton()
  : renderButton();
};

export default Button