import { IoIosSearch } from 'react-icons/io'
import { Form, Link, LoaderFunction, useLoaderData } from 'remix'
import { Input } from '@chakra-ui/react'
import { fetchCurrencies } from '~/client'

export let loader: LoaderFunction = async () => {
  return { something: 'stuff' }
}

export const Header = () => {
  const data = useLoaderData()
  return (
    <header className="flex flex-row flex-1 justify-between items-center p-4 bg-gray-300">
      <div className="flex flex-row items-center">
        <Form
          method="post"
          className="flex flex-row justify-center items-center"
        >
          <IoIosSearch className="mr-2" />
          <input type="text" className="rounded border-2 border-white h-8" />
        </Form>
      </div>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
