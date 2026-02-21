import React, { useState } from "react"
import styles from "./SidebarMenu.module.css"

export interface MenuItem {
    id: string
    label: string
    children?: MenuItem[]
}

export interface SidebarMenuProps {
    isOpen: boolean
    items: MenuItem[]
    onClose: () => void
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({isOpen, items, onClose,}) => {
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    const toggleItem = (id: string) => {
        setExpandedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }

    return (
        <>
            {isOpen && (
                <div className={styles.overlay} onClick={onClose}/>
            )}

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>

                <div className={styles.header}>
                    <button onClick={onClose}>Close</button>
                </div>

                <ul className={styles.menu}>
                    {items.map((item) => (
                        <li key={item.id}>
                            <div className={styles.menuItem} onClick={() => item.children ? toggleItem(item.id) : null}>
                                {item.label}

                                {item.children && (
                                    <span className={styles.arrow} aria-hidden="true">{expandedItems.includes(item.id) ? "▾" : "▸"}</span>
                                )}

                            </div>

                            {item.children && (
                                <ul className={`${styles.submenu} ${expandedItems.includes(item.id) ? styles.expanded : ""}`}>
                                    {item.children.map((sub) => (
                                        <li key={sub.id} className={styles.submenuItem} onClick={onClose}>
                                            {sub.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SidebarMenu