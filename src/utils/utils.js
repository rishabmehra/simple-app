/*
* convert the date into DD-MM-YYYY format
*/
export const getDate = (strDate) =>{
    if(strDate == '' || strDate == null){
        return "Invalid Date"; 
    }
    var validDate = new Date(strDate);
    return `${validDate.getDate()}-${validDate.getMonth()}-${validDate.getFullYear()}`;
}

/*
* remove the unwanted html tags
*/
export const removeHtmlTags = (str) =>{
    if(str == '' || str == null){
        return ""; 
    }
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}