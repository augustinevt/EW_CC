export default async ({
  section, sort, resultWindow, viral,
}) => {
  const res = await fetch(
    `http://localhost:3000?section=${section}&sort=${sort}&resultWindow=${resultWindow}&viral=${viral}`,
    {
      headers: new Headers(
        {
          Authorization: 'Client-ID 3ed4c0157f3d743',
        },
      ),
    },
  )

  const parsedData = await res.json()

  return parsedData
}
