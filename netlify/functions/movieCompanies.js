const movieCompanyData = [
    {id: "1", name: "True Film Productions"},
    {id: "2", name: "Lazy Lemon Films"},
    {id: "3", name: "Good old TV"}
];

export const handler = async () => {
    if (Math.random() < 0.8) {
        return {
            statusCode: 200,
            body: JSON.stringify(movieCompanyData)
            }
        }
    else { 
        return {
            statusCode: 500
        }
    }
}
  