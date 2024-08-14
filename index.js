// On essaye d'éviter au maximum les robots. 
(
    function(){
        let e = 'YW50b2luZUBxdWVydS5mcg==';
        const f = document.getElementById('contact');
        f.innerHTML = atob(e);
        f.setAttribute('href', "mailto:".concat(atob(e)));

        const date = document.getElementById('date');
        const stringDate = new Date().getFullYear();
        const buildDate = '2023';
        if (stringDate == buildDate){
            date.innerHTML = stringDate;
        } else {
            date.innerHTML = `${buildDate} - ${stringDate}`;
        }
    }
)()


var form = document.getElementById("contact-form");
  
async function handleSubmit(event) {
    event.preventDefault();
    const info = "Merci votre message a été envoyé";
    const error = "Désolé une erreur est survenue, merci de réessayer, si cela ne fonctionne toujours pas, c'est cassé."
    const htmlInfo = document.getElementById('info');
    var data = new FormData(event.target);
fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        htmlInfo.innerHTML = info;
        setTimeout(function(){htmlInfo.innerHTML = ""}, 1000)
        form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            htmlInfo.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            setTimeout(function(){htmlInfo.innerHTML = ""}, 300)
        } else {
            htmlInfo.innerHTML = error;
            setTimeout(function(){htmlInfo.innerHTML = ""}, 5000)
        }
      })
    }
  }).catch(error => {
    htmlInfo.innerHTML = error;
    setTimeout(function(){htmlInfo.innerHTML = ""}, 1000)
  });
}
form.addEventListener("submit", handleSubmit);