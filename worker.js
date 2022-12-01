export const api = {
  icon: '🚀',
  name: 'lookup.do',
  description: 'Lookup API',
  url: 'https://lookup.do/api',
  type: 'https://apis.do/search',
  endpoints: {
    listCategories: 'https://lookup.do/api',
    getCategory: 'https://lookup.do/:type',
  },
  site: 'https://lookup.do',
  login: 'https://lookup.do/login',
  signup: 'https://lookup.do/signup',
  subscribe: 'https://lookup.do/subscribe',
  repo: 'https://github.com/drivly/lookup.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://lookup.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
