// const videos = [
//     ["M3P0LpP0IJM", "a"],
//     ["YlP81xnKZqU", "b"],
//     ["Q_nho6x3SVc", "c"],
//     ["l5uDW3VK41U", "d"],
//     ["0xWjHMLDnKA", "e"],
//     ["de3bgQNKNqo", "f"]
// ]
// const videoIframe = `
//     <iframe style="grid-area: AREA;" src="https://www.youtube.com/embed/VIDEO_ID"
//         title="External Video" frameborder="0" allowfullscreen
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
//     </iframe>
// `
// let html = "";
// videos.forEach(([vid, gridArea]) => {
//     let temp = videoIframe.replace(/VIDEO_ID/, vid);
//     temp = temp.replace(/AREA/, gridArea)
//     html += temp;
// })
// const gallery = document.querySelector(".featured-grid");
// gallery.innerHTML = html;


var form = document.getElementById("contact-us-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-us-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)