export function formatDate(date) {
    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) {
        month = '0' + month;
    }
    return day + '.' + month + '.' + year;
}
