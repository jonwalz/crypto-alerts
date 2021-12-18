const baseUrl = 'https://api.santiment.net/graphql'

export async function fetchCurrencies() {
  const CURRENCIES_EXAMPLE = `
query {
    allCurrencyProjects(page: 1) {
        symbol
        ticker
        name
        priceUsd
        volumeChange24h
        marketcapUsd
        id
    }
}
`

  try {
    const data = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: CURRENCIES_EXAMPLE }),
    })

    const json = data.json()
    return json
  } catch (e) {
    console.log('E: ', e)
  }
}
