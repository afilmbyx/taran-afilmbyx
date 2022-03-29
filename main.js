const videos = [
    ["M3P0LpP0IJM", "a"],
    ["YlP81xnKZqU", "b"],
    ["Q_nho6x3SVc", "c"],
    ["l5uDW3VK41U", "d"],
    ["0xWjHMLDnKA", "e"],
    ["de3bgQNKNqo", "f"]
]
const videoIframe = `
    <iframe style="grid-area: AREA;" src="https://www.youtube.com/embed/VIDEO_ID"
        title="External Video" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
`
let html = "";
videos.forEach(([vid, gridArea]) => {
    let temp = videoIframe.replace(/VIDEO_ID/, vid);
    temp = temp.replace(/AREA/, gridArea)
    html += temp;
})
const gallery = document.querySelector(".featured-grid");
gallery.innerHTML = html;s