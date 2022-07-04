import { IncomingMessage } from 'http';
import { parse } from 'url';

export function parseRequest(req: IncomingMessage) {
  const { query } = parse(req.url || '/', true);

  const { author, title, website, image, handle } = query;
  const parameters = [author, title, website, image, handle];

  parameters.map((param) => {
    if (Array.isArray(param)) {
      throw new Error(`${param} must be a string!`);
    }
  });

  const parsedRequest: ParsedReqs = {
    author,
    title,
    website,
    image,
    handle,
  };

  return parsedRequest;
}

export default parseRequest;
