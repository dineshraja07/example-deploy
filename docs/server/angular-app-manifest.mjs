
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'My-first-app',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-first-app"
  },
  {
    "renderMode": 2,
    "redirectTo": "/My-first-app/users/user",
    "route": "/My-first-app/users"
  },
  {
    "renderMode": 2,
    "route": "/My-first-app/users/user"
  },
  {
    "renderMode": 2,
    "route": "/My-first-app/users/result"
  }
],
  assets: {
    'index.csr.html': {size: 522, hash: '49824d2fc316ef49a53617e3435a25a8540a240c642414d5e950d77d0034055e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '9e533507df1002c03c51abe28aee57d81262227fdbb4c09835cc769f89c646d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'users/user/index.html': {size: 709, hash: 'b55736d2357890fa0a98072c5232ba81bd4ada1ba805291ffb3164826308431e', text: () => import('./assets-chunks/users_user_index_html.mjs').then(m => m.default)},
    'users/result/index.html': {size: 709, hash: 'b55736d2357890fa0a98072c5232ba81bd4ada1ba805291ffb3164826308431e', text: () => import('./assets-chunks/users_result_index_html.mjs').then(m => m.default)},
    'index.html': {size: 709, hash: 'b55736d2357890fa0a98072c5232ba81bd4ada1ba805291ffb3164826308431e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
