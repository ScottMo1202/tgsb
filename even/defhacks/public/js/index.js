$(document).ready(function() {
    $("#error").attr("hidden", "");

  /*  $("#btnSubmit").click(function(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.evenfinancial.com/leads/rateTables",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "authorization": "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2",
              "cache-control": "no-cache",
              "postman-token": "83d7c803-ddb6-3fc2-d0d0-368c5048fc9e"
            },
            "processData": false,
            "data": "{}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    })*/

    $("#btnSubmit").click(function(){
        var requiredFields=["inputFirstName", "inputLastName", "inputEmail", "inputLoanAmount", "inputCreditScore"];
        for  (var s of requiredFields) {
            if ($('#'+s).val()=="") {
                $("#error").removeAttr("hidden");
                $("#error").text("Please fill all required information!");
            }
        }
        if ($("#consentCheck").prop("checked")==false) {
            $("#error").removeAttr("hidden");
            $("#error").text("Please check the consent form!");
        }

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = "http://localhost:3000/xhr.html/leads/rateTables"//"https://api.evenfinancial.com/leads/rateTables"


            var data = JSON.stringify({
                            productTypes: ["loan"],
                            personalInformation: {
                                firstName: $("#inputFirstName").val(),
                                lastName: $("#inputLastName").val(),
                                email: $("#inputEmail").val(),
                                city: $("#inputCity").val(),
                                state: $("#state").val(),
                                address1: $("#inputAddress").val(),
                                address2: $("#inputAddress2").val(),
                                zipcode: $("#inputZip").val(),
                                educationLevel: $("#inputEducationLevel").val(),
                                ssn: parseInt($("#inputSSN").val())
                            },
                            loanInformation: {
                                loanAmount: parseInt($("#inputLoanAmount").val())
                            },
                            creditInformation: {
                                providedNumericCreditScore: parseInt($("#inputCreditScore").val())
                            },
                            financialInformation: {
                                employmentStatus: $("#employmentStatus").val(),
                                annualIncome: parseInt($("#inputAnnualIncome").val())
                            },
                            legalInformation: {
                                "consentsToFcra": true, 
                                "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
                            }
                    });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
      
            xhr.addEventListener("readystatechange", function () {
             if (this.readyState === 4) {
               console.log(this.responseText);
             }
            });
      
            xhr.open("POST", "https://api.evenfinancial.com/leads/rateTables");
            xhr.setRequestHeader("Authorization", "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "9d5b4a10-bc58-43aa-a418-fe3fe664114a");
      
            xhr.send(data);
        
    });
});