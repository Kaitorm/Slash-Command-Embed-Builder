class command {
    constructor() {
        this.name = "embed"
        this.description = "Embed builder."
        this.options = [
            { type: 7, name: "channel", description: "The channel where the bot will send the embed.", required: false },
            { type: 3, name: "title", description: "The embed title.", required: false },
            { type: 3, name: "description", description: "The embed description.", required: false },
            { type: 3, name: "image", description: "The embed image.", required: false },
            { type: 3, name: "color", description: "The embed color.", required: false },
            { type: 3, name: "author", description: "The embed author.", required: false },
            { type: 3, name: "url", description: "The embed url.", required: false },
            { type: 3, name: "thumbnail", description: "The embed thumbnail.", required: false },
            { type: 3, name: "footer", description: "The embed footer.", required: false },
            { type: 3, name: "footer-image", description: "The embed footer image. Only works if there is already a footer.", required: false }
        ]
    }

    async execute(interaction, client) {
        const channel = interaction.options.getChannel("channel")
        const title = interaction.options.getString("title")
        const description = interaction.options.getString("description")
        const image = interaction.options.getString("image")
        const color = interaction.options.getString("color")
        const author = interaction.options.getString("author")
        const url = interaction.options.getString("url")
        const thumbnail = interaction.options.getString("thumbnail")
        const footer = interaction.options.getString("footer")
        const footerImage = interaction.options.getString("footer-image")

        if(channel && (channel.type !== "GUILD_TEXT")) return interaction.reply({ content: "The channel must be a text channel.", ephemeral: true })

        try {
            const embeds = [{
                title: title,
                description: description ?? "** **",
                image: { url: image },
                color: color,
                author: { name: author, url: url },
                thumbnail: { url: thumbnail },
                footer: { text: footer, iconURL: footerImage }
            }]
            interaction.reply({ content: "Done!", ephemeral: true })
            if(channel) {
                channel.send({
                    embeds: embeds
                })
            } else {
                interaction.channel.send({
                    embeds: embeds
                })
            }
        } catch(e) {
            interaction.reply("An error has occurred while sending the embed.")
        }
    }
}

module.exports = command
