export const firebaseConfig = {
    apiKey: "AIzaSyCF6K3rT6ZCaZpVd876PJV0PHuG4dDM9V0",
    authDomain: "sampsell-43a6c.firebaseapp.com",
    databaseURL: "https://sampsell-43a6c.firebaseio.com",
    projectId: "sampsell-43a6c",
    storageBucket: "sampsell-43a6c.appspot.com",
    messagingSenderId: "25792121795",
    appId: "1:25792121795:web:8516bf70b0c5cfacce4b76",
    measurementId: "G-E2KSNMPPFZ",
  };

  //Название таблицы пользователей Firebase
  export const rrfConfig = {
    userProfile: "users",
  };
  

  export const sellerConfig = {
    id: 290614,
    u_id: "9660619E56EB4A3883D543CB99D494FF",
  }
  export const xml2jsConfig = {
    trim: true,
    compact: true,
    ignoreDeclaration: true,
    attributesKey: "properties",
    textKey: "value",
    cdataKey: "data",
  }
  export const digisellerRequest = {
    shop_products: "https://shop.digiseller.ru/xml/shop_products.asp",
    shop_categories: "https://shop.digiseller.ru/xml/shop_categories.asp",
    product_info:
      "https://api.digiseller.ru/api/products/info?format=json&transp=cors",
    shop_last_sales: "https://shop.digiseller.ru/xml/shop_last_sales.asp",
    search_products: "https://shop.digiseller.ru/xml/shop_search.asp",
  }
  
  export const firebaseFunc = {
    getUserPurchases:
      "https://europe-west3-sampsell-43a6c.cloudfunctions.net/getUserPurchases",
    checkGoogleCaptcha:
      "https://europe-west3-sampsell-43a6c.cloudfunctions.net/checkGoogleCaptcha",
  }