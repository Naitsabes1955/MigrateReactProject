export async function GET() {
    const data = "sebas"
    console.log("se llamó la función GET")

    return Response.json({
        name: data,
        status: 200,
        message: "Server Responding Correctly"
    })
}

export async function POST() {
    const data = "sebitas"
    console.log("se llamó la función GET")

    return Response.json({
        name: data,
        status: 200,
        message: "Server Responding Correctly"
    })
} //servicio es una funcion asyncrona que consume un endpoint 