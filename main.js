const ExternalVideoTemplate = document.createElement("template")
ExternalVideoTemplate.innerHTML = `
    <style>
    .play-icon {
        transform: rotateZ(90deg);
        fill: white;
        width: 39px;
        height: 34px;
        font-size: 10px;
        margin-top: 0.60rem;
    }
    </style>
    <div style="position: relative;">
        <iframe src="#"
            title="External Video" frameborder="0" allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
        <div style="postition: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <svg class="play-icon" preserveAspectRatio="none" data-bbox="24 33 152.001 134"
                viewBox="24 33 152.001 134" height="200" width="200" xmlns="http://www.w3.org/2000/svg"
                data-type="shape" role="presentation" aria-hidden="true">
                <g>
                    <path
                        d="M159.621 121.057L109.217 38.8c-4.726-7.737-16.025-7.732-20.745.009L26.236 140.885c-7.475 12.26 5.093 26.906 18.453 21.504l100.386-40.592c9.257-3.675 14.546-.74 14.546-.74z">
                    </path>
                    <path
                        d="M173.822 144.873l-4.835-7.931c-3.723-6.107-11.357-8.624-18.015-5.94l-43.744 17.637 49.153 17.467c12.971 4.609 24.58-9.524 17.441-21.233z">
                    </path>
                </g>
            </svg>
        </div>
    </div>
`
class ShowcaseExternalVideo extends Element {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const link = this.getAttribute('src');
        if (!link) {
            throw new Error("src attribute not specified on external-video element.")
        }
        shadowRoot.querySelector("iframe").src = link;
        shadowRoot.appendChild(ExternalVideoTemplate.content.cloneNode(true))
    }
}
customElements.define("external-video", ShowcaseExternalVideo);

