const voice = require("@discordjs/voice");

class TrashSmoke {
    run(client, message, args) {
        message.member.voice.disconnect("Ninjaed.");
        const player = require('../Utility/playvoice');
        player.Play(message, voice.createAudioResource('Assets/smoke.m4a'));
    }

    config = {
        name: "trashsmoke",
        help: "For when you're in need of escape."
    }
}

module.exports = TrashSmoke;