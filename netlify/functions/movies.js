const movieData = [
    {id: "1", reviews: [6,8,7,9,8,7,8], title: "A long train ride", filmCompanyId: "1", cost : 1020, releaseYear: 2001},
    {id: "2", reviews: [5,7,3,4,5,6,3], title: "Flowers on the meadow", filmCompanyId: "2", cost : 983, releaseYear: 1997},
    {id: "3", reviews: [1,4,5,2,3,1,2], title: "Summer", filmCompanyId: "1", cost : 7346, releaseYear: 2015},
    {id: "4", reviews: [6,7,4,5,6,7,3], title: "Back to the garden", filmCompanyId: "2", cost : 364, releaseYear: 2009},
    {id: "5", reviews: [2,1,2,1,3,2,1], title: "Mr John Smith", filmCompanyId: "3", cost : 26456, releaseYear: 2021}
  ];

export const handler = async () => {
    if (Math.random() < 0.8) {
        return {
            headers: {
                'access-control-allow-origin': '*'
            },
            statusCode: 200,
            body: JSON.stringify(movieData)
            }
        }
    else { 
        return {
            headers: {
                'access-control-allow-origin': '*'
            },
            statusCode: 500
        }
    }
}
  