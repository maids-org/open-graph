import html from './template/html';

export function getHtml(parsedReq: ParsedReqs) {
  return html(parsedReq);
}
