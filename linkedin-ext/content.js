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


let name = getName().split(" ")
let company = getCompany()
let url = "http://localmost:3000/users"


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
    console.log("saved to API");
}).catch(err => console.log(err));




