function load() {
    var message = window.document.getElementById('msg');

    var now = new Date(); // Obter a data e hora atuais
    var dateFormatter = new Intl.DateTimeFormat("en-us", { dateStyle: "full", timeStyle: "full" });
    var formattedDate = dateFormatter.format(now); // Formatar a data e hora

    message.innerHTML = `Hour of system is <i>${formattedDate}</i>`;
};