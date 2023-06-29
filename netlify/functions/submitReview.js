
export const handler = async (event) => {
    if (event.httpMethod === 'POST') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Thank you for your review!"}),
            headers: { 
                'content-type': 'application/json',
                'access-control-allow-origin': '*',
                'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'access-control-allow-headers': 'X-Requested-With, content-type'

            }
        }
    }
    return {
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'access-control-allow-headers': 'X-Requested-With, content-type'
        },
        statusCode: 404
    }
};