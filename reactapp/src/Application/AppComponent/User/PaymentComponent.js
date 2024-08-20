// QR Code to make payment //using qr code generator module
// Create a QR code once scan is done it will redirect to a form that asks for 
import React from "react";
import QRCode from "react-qr-code";

let PaymentComponent = () => {

    return (
        <div>
            <h2>Payment</h2>
            <QRCode value="https://www.google.com" />
        </div>
    )
}

export default PaymentComponent;