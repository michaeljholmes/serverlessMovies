
export const handler = async (event) => {
    if (event.httpMethod === 'POST') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Thank you for your review!"}),
            headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' }
        }
    }
    return {
        headers: {
            'access-control-allow-origin': '*'
        },
        statusCode: 404
    }
};