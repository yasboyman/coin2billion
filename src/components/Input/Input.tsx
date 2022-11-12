import React, {
    ForwardRefRenderFunction,
    InputHTMLAttributes,
    ChangeEventHandler
} from 'react'

import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    ref?: string
    placeholder?: string
    ariaLabel?: string
    value?: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {
        className,
        name,
        label,
        type,
        onChange,
        placeholder,
        onKeyDown,
        ariaLabel,
        value,
        id,
        ...otherProps
    },
    ref
) => {
    return (
        <input
            className={styles.input}
            {...otherProps}
            name={name}
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            aria-label={ariaLabel && ariaLabel}
            type={type}
            id={id}
        />
    )
}

const FormInput = React.forwardRef(Input)

export default FormInput
