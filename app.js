// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    window.addEventListener(
        "load",
        function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");

            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(
                forms,
                function (form) {
                    form.addEventListener(
                        "submit",
                        function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            } else if (form.checkValidity() === true) {
                                event.preventDefault();
                                event.stopPropagation();
                                responseCodeMirrorRef.setValue(jsonResponse)
                            }
                            form.classList.add("was-validated");
                        },
                        false
                    );
                }
            );

            const requestCodeMirrorRef = getRequestCodeMirrorRef();
            requestCodeMirrorRef.setValue(jsonPayment);

            const responseCodeMirrorRef = getResponseCodeMirrorRef();
            responseCodeMirrorRef.setValue("{}")
        },
        false
    );
})();

var jsonPayment = "{\n  \"SaleToPOIRequest\": {\n    \"MessageHeader\": {\n      \"MessageClass\": \"Service\",\n      \"MessageCategory\": \"Payment\",\n      \"MessageType\": \"Request\",\n      \"ServiceID\": \"1731207545\",\n      \"SaleID\": \"\",\n      \"POIID\": \"\"\n    },\n    \"PaymentRequest\": {\n      \"SaleData\": {\n        \"SaleTransactionID\": {\n          \"TransactionID\": \"002285\",\n          \"TimeStamp\": \"2020-10-14T13:10:43+02:00\"\n        },\n        \"TokenRequestedType\": \"Customer\"\n      },\n      \"PaymentTransaction\": {\n        \"AmountsReq\": {\n          \"Currency\": \"EUR\",\n          \"RequestedAmount\": \"0\"\n        }\n      },\n      \"PaymentData\": {\n        \"PaymentType\": \"Normal\"\n      }\n    }\n  }\n}";
var jsonResponse = "{\n  \"SaleToPOIResponse\": {\n    \"MessageHeader\": {\n      \"MessageCategory\": \"Payment\",\n      \"MessageClass\": \"Service\",\n      \"MessageType\": \"Response\",\n      \"POIID\": \"54094601\",\n      \"ProtocolVersion\": \"3.1\",\n      \"SaleID\": \"Salesystem-00000001\",\n      \"ServiceID\": \"1731207545\"\n    },\n    \"PaymentResponse\": {\n      \"POIData\": {\n        \"POITransactionID\": {\n          \"TimeStamp\": \"2020-10-14T13:14:01.789\",\n          \"TransactionID\": \"770223496031\"\n        }\n      },\n      \"PaymentReceipt\": [\n        {\n          \"DocumentQualifier\": \"CashierReceipt\",\n          \"OutputContent\": {\n            \"OutputFormat\": \"Text\",\n            \"OutputText\": [\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"          Test_STORE           \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"         Address Line 1          \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"       Address Line 2        \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            Country             \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"--------------------------------\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"14.10.2020            13:13:50\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"        MERCHANT RECEIPT\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"--------------------------------\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"TERMINAL: 54094601\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"DEVICE NAME: 54094601\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"MERCHANT: 123456\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"PAN: XXXXXXXXXXXX0582\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AID: A0000000041010\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"CARD TYPE: M\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"EMV CHIP\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            PAYMENT\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"REFERENCE: 7368\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AMOUNT: EUR 40,00\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AUTHORISATION CODE: 006448\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"              (00)\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            APPROVED\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"          OFFLINE PIN\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \" PLEASE RETAIN FOR YOUR RECORDS\"\n              }\n            ]\n          },\n          \"RequiredSignatureFlag\": false\n        },\n        {\n          \"DocumentQualifier\": \"CustomerReceipt\",\n          \"OutputContent\": {\n            \"OutputFormat\": \"Text\",\n            \"OutputText\": [\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"          Test_STORE           \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"         Address Line 1          \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"       Address Line 2        \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            Country             \"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"--------------------------------\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"14.10.2020            13:13:50\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"       CARDHOLDER RECEIPT\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"--------------------------------\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"TERMINAL: 54094601\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"DEVICE NAME: 54094601\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"MERCHANT: 123456\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"PAN: XXXXXXXXXXXX0582\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AID: A0000000041010\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"CARD TYPE: M\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"EMV CHIP\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            PAYMENT\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"REFERENCE: 7368\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AMOUNT: EUR 40,00\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"AUTHORISATION CODE: 006448\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"              (00)\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"            APPROVED\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \"          OFFLINE PIN\"\n              },\n              {\n                \"EndOfLineFlag\": true,\n                \"Text\": \" PLEASE RETAIN FOR YOUR RECORDS\"\n              }\n            ]\n          },\n          \"RequiredSignatureFlag\": false\n        }\n      ],\n      \"PaymentResult\": {\n        \"AmountsResp\": {\n          \"AuthorizedAmount\": 40,\n          \"Currency\": \"EUR\"\n        },\n        \"PaymentAcquirerData\": {\n          \"AcquirerID\": \"1\",\n          \"AcquirerPOIID\": \"54094601\",\n          \"ApprovalCode\": \"006448\",\n          \"MerchantID\": \"123456\"\n        },\n        \"PaymentInstrumentData\": {\n          \"CardData\": {\n            \"EntryMode\": \"ICC\",\n            \"MaskedPAN\": \"XXXXXXXXXXXX0582\",\n            \"PaymentBrand\": \"M\",\n            \"PaymentToken\": {\n              \"TokenRequestedType\": \"Customer\",\n              \"TokenValue\": \"0946536169790582\"\n            },\n            \"SensitiveCardData\": {\n              \"ExpiryDate\": \"1225\"\n            }\n          },\n          \"PaymentInstrumentType\": \"Card\"\n        },\n        \"PaymentType\": \"Normal\"\n      },\n      \"Response\": {\n        \"Result\": \"Success\"\n      },\n      \"SaleData\": {\n        \"SaleTransactionID\": {\n          \"TimeStamp\": \"2020-10-14T13:10:43+02:00\",\n          \"TransactionID\": \"002285\"\n        }\n      }\n    }\n  }\n}";
var codeMirrorRequestInstance = null;
var codeMirrorResponseInstance = null;

function getRequestCodeMirrorRef() {
    var input = document.getElementById("codemirror-textarea-requestBody");
    var request = CodeMirror.fromTextArea(input,
    {
        lineNumbers: true,
        lineWrapping: true,
        mode: {
            name: "javascript",
            json: true,
            statementIndent: 2
        },
        theme: "dracula",
        autoCloseBrackets: true,
        readOnly: true
    });

    codeMirrorRequestInstance = request;
    codeMirrorRequestInstance.setSize(null, 580);
    return request;
}

function getResponseCodeMirrorRef() {
    var output = document.getElementById("codemirror-textarea-responseBody");
    var response = CodeMirror.fromTextArea(output,
    {
        lineNumbers: true,
        lineWrapping: true,
        mode: {
            name: "javascript",
            json: true,
            statementIndent: 2
        },
        theme: "dracula",
        autoCloseBrackets: true,
        readOnly: true
    });

    codeMirrorResponseInstance = response;
    codeMirrorResponseInstance.setSize(null, 580);
    return response;
}

function updateSaleIdInRequestBody() {
    var regex = /"SaleID": ".*?"/;
    newValue = document.getElementById("saleIdDropdown").value;
    newSaleIdJsonField = "\"SaleID\": \"" + newValue + "\"";
    jsonPayment = jsonPayment.replace(regex, newSaleIdJsonField);
    codeMirrorRequestInstance.setValue(jsonPayment);
}

function updatePoiIdInRequestBody() {
    var regex = /"POIID": ".*?"/;
    newValue = document.getElementById("poiIdDropdown").value;
    newPoiIdJsonField = "\"POIID\": \"" + newValue + "\"";
    jsonPayment = jsonPayment.replace(regex, newPoiIdJsonField);
    codeMirrorRequestInstance.setValue(jsonPayment);
}

function updateAmountInRequestBody() {
    var regex = /"RequestedAmount": ".*?"/;
    newValue = document.getElementById("amount").value;
    newAmountJsonField = "\"RequestedAmount\": \"" + newValue + "\"";
    jsonPayment = jsonPayment.replace(regex, newAmountJsonField);
    codeMirrorRequestInstance.setValue(jsonPayment);
}