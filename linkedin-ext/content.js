function getName() {
    let temp = document.getElementsByClassName("pv-top-card--list");
    temp = temp[0].firstElementChild
    let first_name = temp.innerText
    return first_name
}


function getCompany() {
    let company_name = document.getElementsByClassName("pv-top-card--experience-list-item")
    company_name = company_name[0].innerText
    return company_name
}


console.log(getName())
console.log(getCompany())