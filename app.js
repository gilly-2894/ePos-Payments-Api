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