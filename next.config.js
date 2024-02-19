/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/img/champion/loading/**',
            }
        ]
    }
}