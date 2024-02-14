import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '.'
import logo from '../assets/ignite_logo.svg'

export function Header() {
  return (
    <header className="flex flex-row items-start justify-between bg-gray-900 pt-10 px-72 h-52">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" />
        <p className="font-bold text-2xl">DT Money</p>
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="px-5 py-3 rounded-md bg-green-500 text-base font-bold text-white hover:bg-green-300 duration-300 outline-none">
            Nova transação
          </button>
        </Dialog.Trigger>
        <NewTransactionModal />
      </Dialog.Root>
    </header>
  )
}
