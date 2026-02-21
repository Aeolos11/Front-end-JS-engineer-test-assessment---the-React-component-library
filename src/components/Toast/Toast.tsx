import React, { useEffect, useState } from "react"
import styles from "./Toast.module.css"

export interface ToastProps {
    message: string
    type?: "success" | "error" | "info" | "warning"
    duration?: number
    onClose?: () => void
    showCloseButton?: boolean
}

const Toast: React.FC<ToastProps> = ({message, type = "info", duration = 3000, onClose, showCloseButton = true,}) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (!duration) return

        const timer = setTimeout(() => {
            setVisible(false)
            onClose?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    if (!visible) return null

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <span>{message}</span>

            {showCloseButton && (

                <button className={styles.close} onClick={() => {setVisible(false), onClose?.()}}>
                    ×
                </button>
            )}
        </div>
    )
}

export default Toast