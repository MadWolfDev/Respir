# Respir'

Respir is a meditation app

## Development

To start the app locally

Setup :
`yarn`

Launch :
`yarn start`

## Deploy localy

Execute the commands :

```
yarn build
serve -s build
```

## Deploy online

Prerequisite :

- Install firebase tools :
  `npm install -g firebase-tools`
- Create an account on firebase and get invited to Respir projet and login on your terminal with `firebase login`

To deploy :

```
yarn build
firebase deploy
```

## Documentation

- [Z-Index](./docs/z_index_order.md)
