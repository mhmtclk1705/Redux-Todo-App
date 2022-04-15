import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { myStore } from "./redux";

//* Provider ı im react-redux dan import ediyoruz

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* //! Redux kullanırken Context gibi Provider a ihtiyacımız oluyor 
    //! Bu yüzden App js i provider ile sarmallıyoruz 
    //! props redux dan import ettiğimiz store ın içerisine gönderiyoruz */}
    {/* //! store olarak myStore u tanımlamamızın sebebi redux>>index.js içerisinde bu şekilde export etmemizden dolayı
   //! daha sonra bunu kullanacağımız yerde useSelector ile çekip kullanıyoruz... */}
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
