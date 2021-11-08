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

            const [input, output] = document.querySelectorAll(".codemirror-textarea")
            const editor = CodeMirror.fromTextArea(input,
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
                    gutters: ['CodeMirror-lint-markers'],
                    lint: true
                });

            let jsonPayment = "{\n  \"SaleToPOIRequest\": {\n    \"MessageHeader\": {\n      \"MessageClass\": \"Service\",\n      \"MessageCategory\": \"Payment\",\n      \"MessageType\": \"Request\",\n      \"ServiceID\": \"1731207545\",\n      \"SaleID\": \"Salesystem-00000001\",\n      \"POIID\": \"AUTO\"\n    },\n    \"PaymentRequest\": {\n      \"SaleData\": {\n        \"SaleTransactionID\": {\n          \"TransactionID\": \"002285\",\n          \"TimeStamp\": \"2020-10-14T13:10:43+02:00\"\n        },\n        \"TokenRequestedType\": \"Customer\"\n      },\n      \"PaymentTransaction\": {\n        \"AmountsReq\": {\n          \"Currency\": \"EUR\",\n          \"RequestedAmount\": \"40\"\n        }\n      },\n      \"PaymentData\": {\n        \"PaymentType\": \"Normal\"\n      }\n    }\n  }\n}"
            editor.setValue(jsonPayment);
            const response = CodeMirror.fromTextArea(output,
                {
                    // lineNumbers: true,
                    // mode: {
                    //     name: "javascript",
                    //     json: true,
                    //     statementIndent: 2
                    // },
                    // theme: "dracula",
                    // autoCloseBrackets: true
                    mode: 'application/json',
                    theme: "dracula",
                    lineNumbers: true,
                    lint: true,
                    autoCloseBrackets: true,
                    gutters: ['CodeMirror-lint-markers']
                });

        },
        false
    );
})();