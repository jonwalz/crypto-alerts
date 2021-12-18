import { MetaFunction, LoaderFunction, useActionData, Outlet } from 'remix'
import { useLoaderData, json } from 'remix'
import { fetchCurrencies } from '~/client'

type IndexData = {
  resources: Array<{ name: string; url: string }>
  demos: Array<{ name: string; to: string }>
}

export let loader: LoaderFunction = async () => {
  const data = await fetchCurrencies()
  return data
}

export let action = async ({ request }) => {
  const data = await fetchCurrencies()
  return data
}

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export default function Index() {
  const resp = useActionData()

  return (
    <div className="remix__page">
      <div>Index</div>
      <Outlet />
    </div>
  )
}
