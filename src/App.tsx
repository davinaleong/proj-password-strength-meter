import { useState } from "react"
import "./App.css"

const TYPE_PASSWORD: string = "password"
const TYPE_TEXT: string = "text"

function App() {
  const [passwordFieldType, setPasswordFieldType] = useState(TYPE_PASSWORD)

  const togglePasswordHandler = () => {
    if (passwordFieldType === TYPE_PASSWORD) {
      setPasswordFieldType(TYPE_TEXT)
    } else {
      setPasswordFieldType(TYPE_PASSWORD)
    }
  }

  return (
    <main className="grid place-items-center h-screen bg-slate-100">
      <form action="" method="post">
        <h1 className="text-4xl">Password Strength Meter</h1>

        <div className="grid mt-4">
          <label htmlFor="input-password" className="text-lg">
            Please enter your password:
          </label>
          <input
            type={passwordFieldType}
            name="password"
            id="input-password"
            className="text-lg"
          />
          <div className="password-meter bg-green-800 h-0.5"></div>
        </div>
        <div>
          <label
            htmlFor="input-toggle_password"
            className="flex gap-2 items-center"
          >
            <input
              type="checkbox"
              name="toggle_password"
              id="input-toggle_password"
              onClick={togglePasswordHandler}
            />
            Toggle Password
          </label>
        </div>
      </form>
    </main>
  )
}

export default App
