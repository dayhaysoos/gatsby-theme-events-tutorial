module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/data/`
            }
        },
        {
            resolve: 'gatsby-transformer-yaml',
            options: {
                typeName: 'Event'
            }
        }
    ]
}