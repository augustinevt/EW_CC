export default async ({section, sort, resultWindow, viral}) => {
  const res = await fetch(`https://api.imgur.com/3/gallery/${section}/${sort}/${resultWindow}/?showViral=${viral}`, {
    headers: new Headers({
      Authorization: 'Client-ID 3ed4c0157f3d743'
    })
  })

  return await res.json()
}

