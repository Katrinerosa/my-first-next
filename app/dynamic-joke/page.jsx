

export default async function DynamicJokePage() {
     const res = await fetch("https://api.chucknorris.io/jokes/random", {next: {revalidate: 300}})
    const data = await res.json()
    return (
        <>
        <h1>{data.value}</h1>
        </>
    )
}