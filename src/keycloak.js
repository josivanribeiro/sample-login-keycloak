import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://acesso.dev.apps.anvisa.gov.br/auth/',
  realm: 'anvisa-local', // replace with your realm name
  clientId: 'front-anvisa-loc',  // replace with your client ID
});

export default keycloak;