export async function GET(){

    return Response.json({
        id: 1,
        nameCharacter: "Yuuji",
        rankCharacter: "A",
        ageCharacter: 17,
        status: 200,
        message: "Server Responding Correctly"
    })
}
