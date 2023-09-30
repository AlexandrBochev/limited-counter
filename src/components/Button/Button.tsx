import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  const btnStyles = disabled ? "rounded p-1 bg-gray-300" : "rounded p-1 bg-green-500 hover:bg-green-600 active:bg-green-500"

  return (
    <button onClick = { onClick } disabled={ disabled } className={ btnStyles }>
      { children }
    </button>
  )
}

export { Button }