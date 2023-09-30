interface InputProps  {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
}

const Input = ({ label, onChange, value }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-500 mb-1">{ label }</label>
      <input
        onChange={ onChange }
        value={ value }
        className="border rounded p-1 w-28 h-10"
        type="number"
        placeholder="Enter a limit"
      />
    </div>
  )
}

export { Input }