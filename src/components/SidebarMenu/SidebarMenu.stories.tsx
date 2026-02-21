import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import SidebarMenu from "./SidebarMenu"
import type { MenuItem } from "./SidebarMenu"

const meta: Meta<typeof SidebarMenu> = {title: "Navigation/SidebarMenu", component: SidebarMenu,}

export default meta

type Story = StoryObj<typeof SidebarMenu>

const sampleItems: MenuItem[] = [
    {
        id: "1",
        label: "Dashboard",
    },
    {
        id: "2",
        label: "Settings",
        children: [
            { id: "2-1", label: "Profile" },
            { id: "2-2", label: "Security" },
        ],
    },
]

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(true)

        return (
            <>
                <button onClick={() => setOpen(true)}>
                    Open Menu
                </button>

                <SidebarMenu
                    isOpen={open}
                    items={sampleItems}
                    onClose={() => setOpen(false)}
                />
            </>
        )
    },
}