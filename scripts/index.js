$(document).ready(function() {
    $("#error").attr("hidden", "");
    $("#result").attr("hidden", "");

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
                return;
            }
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
                                "consentsToFcra": $("#consentCheck").prop("checked"), 
                                "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
                            }
                    });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
      
            xhr.addEventListener("readystatechange", function () {
             if (this.readyState === 4) {
               $("#loanForm").attr("hidden", "");
               $("#result").removeAttr("hidden");
                var result = JSON.parse(this.responseText);
                if (!result.loanOffers) {
                    $("#loanResults").text("No offers found.");
                    $('#disclaimer').attr("hidden", "");
                } else {
                    $("#disclaimer").removeAttr("hidden");
                    $("#loanResults").text("");

                for (var offer of result.loanOffers) {
                    $("#loanResults").append(
                       ` <a href='#' class='list-group-item list-group-item-action'> 
                            <div class='media'>  
                                <img src='http://${offer.originator.images[0].url}' class='align-self-center mr-3' width="80" height="50" alt='...'>
                                <div class='d-flex w-100 justify-content-around'>
                                    <div class="col"><h5 class='mb-1'>${offer.originator.name}</h5></div>
                                    <div class="col"><h6>${offer.meanApr}% <small>APR</small></h6></div>
                                    <div class="col"><h6>$${offer.meanMonthlyPayment}/${offer.termUnit} <small>for ${offer.termLength} ${offer.termUnit}s</small></h6></div>
                                    <div class="col"><h6>Total Payment: $${offer.meanTotalPayment}</h6></div>
                                </div>
                            </div>

                        </a>`
                    )
                }
            }

             }
            });
      
            xhr.open("POST", "https://api.evenfinancial.com/leads/rateTables");
            xhr.setRequestHeader("Authorization", "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "9d5b4a10-bc58-43aa-a418-fe3fe664114a");
      
            xhr.send(data);
        
    });

    $("#btnBack").click(function(){
        $("#result").attr("hidden", "");
        $("#loanForm").removeAttr("hidden");
        $("#error").attr("hidden", "");
    });
});