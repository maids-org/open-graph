function css(parsedReqs: ParsedReqs) {
  const { image } = parsedReqs;
  return `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    * {
      box-sizing: border-box;
    }
    body {
      background: #000;
      height: 100vh;
      font-family: 'Contrail One', sans-serif;
      font-size: 18px;
      padding: 20px;
    }
    .container {
      position: relative;
      height: calc(100vh - 40px);
      padding: 40px;
    }
    .title {
      font-size: 7em;
      line-height: 1.05em;
      height: 3.15em;
      overflow: hidden;
      color: #fff;
    }
    .author {
      position: absolute;
      bottom: 0px;
      left: 0px;
      padding: 40px;
      font-size: 3em;
      color: #fff;
      display:flex;
      align-items: center;
    }
    
    .author-name {
      padding-left: 20px;
      padding-top: 20px;
    }
    
    .author-image {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      background-image: url(${image});
      background-size: cover;
      margin-bottom: -9px;
    }
    .website {
      position: absolute;
      bottom: 0px;
      right: 0px;
      padding: 40px;
      font-size: 2em;
      color: #fff;
      display: flex;
      flex-direction: column;
    }
    .handle {
      padding-bottom: 20px;
    }   
    `;
}

export default css;
