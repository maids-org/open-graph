// import { filterHtml } from "../filterHtml";
import css from './css';

export function html(parsedReqs: ParsedReqs) {
  const { author, title, website, image, handle } = parsedReqs;
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Generated Image</title>
     
      <link
              href="https://fonts.googleapis.com/css2?family=Contrail+One&family=DM+Mono:ital@0;1&display=swap"
              rel="stylesheet"
            />
      <style>
        ${css(parsedReqs)}
      </style>
      <body>
        <div class="container">
          <div class="title">${title}</div>
          <div class="author">
          
            <img src="${image}" class="author-image"  alt='Image'/>
            <h4 class="author-name">${author}</h4>
          </div>
          <div class="website">
          <div class="handle">
          ${handle}
          </div>
          
          ${website}
          </div>
        </div>
      </body>
    </html>
    `;
}

export default html;
