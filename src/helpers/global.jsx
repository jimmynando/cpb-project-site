export const dateToStandard = (date) => {
    date = date.split('-');
    return `${date[0]}-${date[1]}-${date[2].substring(0,2)}`;
}

export const dateToNacional = (date) => {
    date = date.split('-');
    return `${date[2].substring(0,2)}/${date[1]}/${date[0]}`;
}