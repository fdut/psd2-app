# Psd2App

This is a sample of a Web app using Openbanking PSD2 api powered by IBM API Connect available here : [
Payments and Accounts 1.0.0 ](https://open-banking-sandbox.developer.eu.apiconnect.ibmcloud.com/node/378) 


![App Screenshot](./src/assets/demoaisp.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Test Application

Update src/app/api.endpoints.ts with your value

```
export default 
    {
      clientid: 'YOUR_CLIENTID_FOR_YOUR_APP',
      clientsecret: 'YOUR_CLIENTSECRET_FOR_YOUR_APP',
      apicEndpoint: 'APIConnect_ENDPOINT',  // Example: https://api.eu.apiconnect.ibmcloud.com/lbppoc-lbp/sb
      redirectUri: 'http://localhost:4200/aisp' // Example: http://localhost:4200/aisp
};
```

Run `ng serve` in this folder for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
