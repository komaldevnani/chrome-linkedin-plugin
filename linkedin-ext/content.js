function getName() {
    let temp = document.getElementsByClassName("pv-top-card--list");
    temp = temp[0].firstElementChild
    let first_name = temp.innerText
    return first_name
}


function getCompany() {
    if (document.getElementsByClassName("pv-top-card--experience-list-item").length) {
        let company_name = document.getElementsByClassName("pv-top-card--experience-list-item")
        company_name = company_name[0].innerText
        return company_name
    }
}


function saveData(name, company) {
    let url = "https://c51a94b8b2df.ngrok.io/users"
    fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            first_name: name[0],
            last_name: name[1],
            company_name: company
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        console.log("saved to db");
    }).catch(err => console.log(err));
}

function extractAndSave() {
    const name = getName().split(" ")
    const company = getCompany()

    saveData(name, company)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Extracting data from LinkedIn")
        extractAndSave()
        console.log("Saved")
        sendResponse("Saved")
    });
