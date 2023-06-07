export default function ({ app, route, redirect }) {
  const cookie = getOrSetCookie(app);
  const id = route.params.ref;

  switch(cookie) {
    case 'A':
      if (route.name !== 'legacy-ref') {
        return redirect(302, route.fullPath.replace(/(-3D1?)$/, ''));
      }
      break;
    case 'B':
      
      if (route.name === 'immersion-ref-1') {
        return redirect(302, route.fullPath.replace('-3D1', '-3D'));
      }
      if (route.name === 'legacy-ref') {
        return redirect(302, route.fullPath.replace(id, `${id}-3D`));
      }
      break;
    case 'C':
      if (route.name === 'immersion-ref') {
        return redirect(302, route.fullPath.replace('-3D', '-3D1'));
      }
      if (route.name !== 'immersion-ref-1') {
        return redirect(302, route.fullPath.replace(id, `${id}-3D1`));
      }
      break;
  }
}

function getOrSetCookie(app) {
  let cookieValue = app.$cookies.get('abc-value');
  if (app.$cookies.get('abc-value') === undefined) {
    const val = Math.floor(Math.random() * 3);
    cookieValue = ['A', 'B', 'C'][val];
    app.$cookies.set('abc-value', cookieValue);
  }
  return cookieValue;
}