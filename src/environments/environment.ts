// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDxmr9JHAGpmIXe0BtP6YhOCXgYiOylyiw',
    authDomain: 'blog-abogados.firebaseapp.com',
    databaseURL: 'https://blog-abogados.firebaseio.com',
    projectId: 'blog-abogados',
    storageBucket: 'blog-abogados.appspot.com',
    messagingSenderId: '414481414222'
  }
};
