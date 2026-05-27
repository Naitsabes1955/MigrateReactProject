export const getPeople = async () =>{
    try {
        const res = await fetch("/api/people") //in fetch, you don't need to set/put the ip address, only the route , next do that by default
        const data = res.json()
        return data

    } catch (error) {
        console.error(error)
    }
}
