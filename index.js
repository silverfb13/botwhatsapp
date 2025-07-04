const venom = require('venom-bot');

venom
  .create({
    headless: true,
    useChrome: false,
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log('Erro ao iniciar o bot: ', erro);
  });

function start(client) {
  console.log('✅ Bot iniciado com sucesso!');

  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      const msg = message.body.toLowerCase();

      if (msg.includes('plano canais')) {
        client.sendText(message.from, '📺 *Plano Canais* – R$20,00\n\n✔ Todos os canais ao vivo\n✔ ESPN, Sportv, Premiere, Combate\n✔ Canais internacionais e infantis\n✔ Qualidade HD e Full HD\n✔ Suporte completo via WhatsApp\n✔ Atualizações diárias de canais\n✔ Teste grátis de 6 horas');
      } else if (msg.includes('plano canais filmes e séries')) {
        client.sendText(message.from, '🎬 *Plano Canais + ÁguiaVod* – R$30,00\n\n✔ Todos os canais ao vivo\n✔ Acesso completo ao ÁguiaVod (filmes e séries)\n✔ Filmes lançamentos e séries atualizadas\n✔ Canais internacionais, esportivos e infantis\n✔ Qualidade HD e Full HD\n✔ Suporte completo via WhatsApp\n✔ Atualizações diárias de canais e catálogo\n✔ Teste grátis de 6 horas');
      } else if (msg.includes('plano ilimitado')) {
        client.sendText(message.from, '🔥 *Plano Ilimitado* – R$150,00\n\n✔ Todos os canais ao vivo\n✔ Acesso completo ao ÁguiaVod (filmes e séries)\n✔ Filmes lançamentos e séries atualizadas\n✔ Canais adultos liberados\n✔ Multi-dispositivos (TV, Celular, PC, TV Box)\n✔ Qualidade HD e Full HD\n✔ Suporte prioritário via WhatsApp\n✔ Atualizações diárias de canais e catálogo\n✔ Teste grátis de 6 horas');
      } else {
        client.sendText(message.from, '❗ *Desculpe, não entendi.*\n\nPor favor, digite:\n- plano canais\n- plano canais filmes e séries\n- plano ilimitado');
      }
    }
  });
}
