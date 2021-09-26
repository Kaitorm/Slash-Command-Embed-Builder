class command {
    constructor() {
        this.name = "test"
        this.description = "Embed builder."
        this.options = [
            { type: 3, name: "title", description: "The embed title.", required: false },
            { type: 3, name: "description", description: "The embed description.", required: false },
            { type: 3, name: "image", description: "The embed image.", required: false },
            { type: 3, name: "color", description: "The embed color.", required: false },
            { type: 3, name: "author", description: "The embed author.", required: false },
            { type: 3, name: "url", description: "The embed url.", required: false },
            { type: 3, name: "thumbnail", description: "The embed thumbnail.", required: false }
        ]
    }

    async execute(interaction, client) {
        const title = interaction.options.getString("title")
        const description = interaction.options.getString("description")
        const image = interaction.options.getString("image")
        const color = interaction.options.getString("color")
        const author = interaction.options.getString("author")
        const url = interaction.options.getString("url")
        const thumbnail = interaction.options.getString("thumbnail")

        try {
            interaction.reply({
                embeds: [{
                    title: title,
                    description: description ?? "** **",
                    image: { url: image },
                    color: color,
                    author: { name: author, url: url },
                    thumbnail: { url: thumbnail }
                }]
            })
        } catch(e) {
            interaction.reply("An error has occurred while sending the embed.")
        }
    }
}

module.exports = command