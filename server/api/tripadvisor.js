export default defineEventHandler(async () => {
    const options = {
        method: 'GET',
        referrer: 'https://dashboard.been.coffee',
        referrerPolicy: 'no-referrer-when-downgrade',
        headers: {
            referrer: 'https://dashboard.been.coffee',
            accept: 'application/json'
        }
    }

    try {
        const url = `https://api.content.tripadvisor.com/api/v1/location/23838579/reviews?key=${process.env.TRIPADVISOR_KEY}&language=en`
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
})
