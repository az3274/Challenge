export const convertDate = (date) => {
    const d = date.split("-");
    return `${d[2]}-${d[1]}-${d[0]}`
}