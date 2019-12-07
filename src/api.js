export default async ({
  section, sort, resultWindow, viral,
}) => {
  const res = await fetch(
    `http://localhost:3000?section=${section}&sort=${sort}&resultWindow=${resultWindow}&viral=${viral}`,
  )

  const parsedData = await res.json()

  return parsedData
}
