The price aggregator for CoinMarketCap and OpenExchangeRate. This component shared by rwallet-server Dogfood and Production environments and use Google Pub/Sub for communication.

## Usage

before run app, should update .env file

- development
    1. npm run dev
- production
    1. npm run build
    2. npm run start

## Deployment
1. create .env file
1. ```gcloud config get-value project``` to check which project is currently active
1. ```gcloud config set project PROJECT_ID``` to change current project
1. ```gcloud projects list``` to list projects accessible by the active account
1. ```gcloud app deploy``` to deployed app for the current project, also can add ```--project=PROJECT_ID``` flag to specify project ID to use for this invocation

## TODO
1. complete typescript types [enhancement]
1. add docker support [enhancement]
1. add google secret manager support [enhancement]
1. use dependency injection by TSyringe [enhancement]
1. use agenda to replace setInterval [enhancement]
