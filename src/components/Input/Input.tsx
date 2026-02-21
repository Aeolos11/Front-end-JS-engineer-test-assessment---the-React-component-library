import React, { useState } from "react"
import styles from "./Input.module.css"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean
}

const Input: React.FC<InputProps> = ({
                                         type = "text",
                                         clearable = false,
                                         value: controlledValue,
                                         onChange,
                                         ...props
                                     }) => {
    const [internalValue, setInternalValue] = useState(
        controlledValue ?? ""
    )

    const [isPasswordVisible, setIsPasswordVisible] =
        useState<boolean>(false)

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const inputType =
        type === "password" && isPasswordVisible
            ? "text"
            : type

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isControlled) {
            setInternalValue(e.target.value)
        }
        onChange?.(e)
    }

    const handleClear = () => {
        if (!isControlled) {
            setInternalValue("")
        }

        const event = {
            target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>

        onChange?.(event)
    }

    return (
        <div className={styles["input-wrapper"]}>
            <input
                {...props}
                type={inputType}
                value={value}
                onChange={handleChange}
                className={styles["input-field"]}
            />

            {clearable && value && (
                <button
                    type="button"
                    onClick={handleClear}
                    className={styles["input-clear"]}
                >
                    ×
                </button>
            )}

            {type === "password" && (
                <button
                    type="button"
                    onClick={() =>
                        setIsPasswordVisible((prev) => !prev)
                    }
                    className={styles["input-toggle"]}
                >
                    {isPasswordVisible ? "Hide" : "Show"}
                </button>
            )}
        </div>
    )
}

export default Input