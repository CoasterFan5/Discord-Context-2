export const GET = () => {
    return new Response('https://google.com', {
        status: 303,
        headers: {
            location: 'https://discord.com/oauth2/authorize?client_id=844557273782157342&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fgateway&scope=identify'
        }
    })
}