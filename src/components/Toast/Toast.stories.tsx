import type { Meta, StoryObj } from "@storybook/react"
import Toast from "./Toast"

const meta: Meta<typeof Toast> = {title: "Feedback/Toast", component: Toast, argTypes: {
        type: {
            control: "select",
            options: ["success", "error", "info", "warning"],
        },
        duration: {
            control: "number",
        }
    }
}

export default meta

type Story = StoryObj<typeof Toast>

export const Success: Story = {
    args: {message: "Operation successful", type: "success"}
}

export const Error: Story = {
    args: {message: "Something went wrong", type: "error"}
}

export const Warning: Story = {
    args: {message: "Be careful", type: "warning"}
}

export const Info: Story = {
    args: {message: "Some information", type: "info"}
}