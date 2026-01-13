export const dynamic = "force-dynamic";


export default async function JokePage() {
     const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    return (
        <>
        <h1>{data.value}</h1>
        </>
    )
}
