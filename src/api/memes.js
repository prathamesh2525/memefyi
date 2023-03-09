export const getAllMemes = async () => {
  const res = await fetch("https://api.imgflip.com/get_memes")
  return await res.json()
}
