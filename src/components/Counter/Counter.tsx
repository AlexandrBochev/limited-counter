import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { Plus } from "../Icons/Plus"
import { Minus } from "../Icons/Minus"
import { Reset } from "../Icons/Reset"
import { useEffect, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0)
  const [minLimit, setMinLimit] = useState(localStorage.getItem('minLimit') || 0)
  const [maxLimit, setMaxLimit] = useState(localStorage.getItem('maxLimit') || 0)

  useEffect(() => {
    if (count <= Number(minLimit)) {
      setCount(Number(minLimit))
    } else if (count >= Number(maxLimit)) {
      setCount(Number(maxLimit))
    }
    
    localStorage.setItem('count', count.toString())
    localStorage.setItem('minLimit', minLimit.toString())
    localStorage.setItem('maxLimit', maxLimit.toString())
  }, [count, minLimit, maxLimit])
  
  const handleChangMinLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (Number(maxLimit) < Number(e.target.value)) {
      alert('Min limit must be less than max limit')
      return
    }
    setMinLimit(e.target.value)
  }

  const handleChangMaxLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (Number(minLimit) > Number(e.target.value)) {
      alert('Max limit must be greater than min limit')
      return
    }
    setMaxLimit(e.target.value)
  }

  const hendleClickDecrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    count > Number(minLimit) && setCount(count - 1)
  }

  const hendleClickIncrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    count < Number(maxLimit) && setCount(count + 1)
  }

  const handleClickReset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if (!count && !minLimit && !maxLimit) {
      alert('Counter is already reset')
      return
    } else if (window.confirm('Are you sure you want to reset the counter?')) {
      setCount(0)
      setMinLimit('')
      setMaxLimit('')
    }
  }

  return (
    <div className="flex relative flex-col items-center bg-gray-100 p-6 border rounded shadow">
      <h1 className="font-bold text-3xl text-gray-500 mb-6">Counter</h1>
      <div
        onClick={ handleClickReset }
        className="absolute top-3 right-3 cursor-pointer text-gray-300 hover:text-red-500 active:text-gray-400"
      >
        <Reset />
      </div>
      <form>
        <div className="flex space-x-4 mb-4">
          <Input onChange={ handleChangMinLimit } value={ minLimit } label="Min limit" />
          <Input onChange={ handleChangMaxLimit } value={ maxLimit } label="Max limit" />
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button onClick = { hendleClickDecrement } disabled={count <= Number(minLimit)}>
            <Minus />
          </Button>
          <p className="font-bold text-5xl text-gray-500">
            { count }
          </p>
          <Button onClick = { hendleClickIncrement } disabled={count >= Number(maxLimit)}>
            <Plus />
          </Button>
        </div>
      </form>
    </div>
  )
}

export { Counter }