const venom = require('venom-bot');

venom
    .create({ session: 'ON', multidevice: true, headless: true })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
        if (message.body !== '') {
            client
                .sendContactVcard(message.from, '5511998927372@c.us', 'Vereador Isaque Messias')
                .then((result) => {
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro);
                });
        }
    });
}
