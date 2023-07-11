const parseValueLT10 = (value) => {
    return value< 10 ? `0${value}` : value;
}

function getLocalISODate(date){
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = parseValueLT10(date.getDate())
    const hours = parseValueLT10(date.getHours())
    const minutes = parseValueLT10(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`
}

export { getLocalISODate }