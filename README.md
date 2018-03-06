# Psd2 App

This is a sample of a Web app using Open Banking PSD2 Api powered by IBM API Connect available here : [
Payments and Accounts 1.0.0 ](https://open-banking-sandbox.developer.eu.apiconnect.ibmcloud.com/node/378) 


![App Screenshot](./src/assets/demoaisp.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Initial Task

Install npm, Angular 5.x

Update dependencies

```
  npm install
```

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

In the Home page, clic on the button :
"`Go to AISP Use Case`"

In the AISP page follow all the step of AISP use case :

1. Clic `Authorize`
2. Clic `Generate Access Code`
3. Clic `Introspect token`
4. Clic `List of accounts``

In the setting page, you have a summary of use value used for authentication.

In the Analytics page, there is an embedded `Analytics Dasboard` (You need to have access to it, to see it)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
