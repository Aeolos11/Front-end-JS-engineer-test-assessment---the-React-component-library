import type { Meta, StoryObj } from "@storybook/react"
import Input from "./Input"

const meta: Meta<typeof Input> = {title: "Input", component: Input, tags: ["autodocs"], argTypes: {
        type: {
            control: "select",
            options: ["text", "password", "number"],
        },
        clearable: {
            control: "boolean",
        }
    }
}

export default meta

type Story = StoryObj<typeof Input>

export const Text: Story = {
    args: {type: "text", placeholder: "Enter text"}
}

export const Password: Story = {
    args: {type: "password", placeholder: "Enter password"}
}

export const Clearable: Story = {
    args: {type: "text", placeholder: "Clearable input", clearable: true}
}

export const Number: Story = {
    args: {type: "number", placeholder: "Enter number"}
}