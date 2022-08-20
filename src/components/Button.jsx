import React from 'react'
import classNames from 'classnames'



const Button = ({onClickButton, className, outline, children}) => {
    return (
        <button onClick={onClickButton}
        className={classNames('button', className, {
            'button-outline': outline,
        })}>
            {children}
        </button>
    )
}

export default Button;