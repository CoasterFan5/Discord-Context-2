
export const GET = ({ url }) => {
    const code = url.searchParams.get('code')
    if (!code) {
        return new Response('No code provided', { status: 400 })
    }
}