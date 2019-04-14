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
        console.log($("#inputEducationLevel").val())
        var requiredFields=["inputFirstName", "inputLastName", "inputEmail", "dateOfBirth", "inputLoanAmount", "inputCreditScore"];
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
            targetUrl = "https://api.evenfinancial.com/leads/rateTables"

        fetch(targetUrl,{
            body: JSON.stringify({
          /*      productTypes: ["loan"],
                personalInformation: {
                    firstName: $("#inputFirstName").val(),
                    lastName: $("#inputLastName").val(),
                    email: $("#inputEmail").val(),
                    city: $("#inputCity").val(),
                    state: $("#state").val(),
                    address1: $("#inputAddress").val(),
                    address2: $("#inputAddress2").val(),
                    zipcode: $("#inputZip").val(),
                    dateOfBirth: $("#dateOfBirth").val(),
                    educationLevel: $("#inputEducationLevel").val(),
                    ssn: $("#inputSSN").val()
                },
                loanInformation: {
                    loanAmount: $("#inputLoanAmount").val()
                },
                creditInformation: {
                    providedNumericCreditScore: $("#inputCreditScore").val()
                },
                financialInformation: {
                    employmentStatus: $("#employmentStatus").val(),
                    annualIncome: $("#inputAnnualIncome").val()
                },
                legalInformation: {
                    "consentsToFcra": true, 
                    "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
                }*/
            }),
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'
            },
            crossDomain: true
            //mode: 'no-cors'
        })
        .then(function(resp) {  
            if (resp.ok) {
                console.log(resp.text())
            }
            return resp.text().then(function(err) {
                throw err;
            }); 
        })
        .catch(function(err) {
            $("#error").removeAttr("hidden");
            $("#error").text(err);
            console.error(err);
        });  
    });
});