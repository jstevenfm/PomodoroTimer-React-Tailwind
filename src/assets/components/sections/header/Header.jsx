import IconSettings from '../../icons/IconSettings'
import Logo from '../../icons/Logo.jsx'

const Header = () => {
  return (
    <header className="flex justify-between w-full p-4">
      <a className="flex cursor-pointer hover:scale-110" href="/">
        <Logo />
        <h1 className="px-3 self-center text-2xl font-semibold">Pomodoro Timer</h1>
      </a>
      <button title='Settings' className="cursor-pointer hover:scale-120">
        <IconSettings />
      </button>
    </header>
  )
}

export default Header