# Discord Context
This is a discord bot that provides context for users in different regions of the world. 
It converts currencies and may provide information about metric and imperial conversions. 
Example: 
- A user sends the following message: `My car insurance is $x a month`
- The both responds with the following context: `x USD is equal to y EUR`

## Development
1) Install docker, pnpm, and node LTS (20.x)

2) Create a .env file based on the .env.example file

3) Run the following commands:
    ```bash
    pnpm install
    docker-compose up -d
    pnpm run dev
    ```
4) Edit code.

