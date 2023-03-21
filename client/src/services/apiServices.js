import httpRequest from "~/utils/httpRequest"

const getFreeCard = async () => {
    return await httpRequest.get('/api/cards/free');
}

const addNewBill = async(data) => {
    return await httpRequest.post('/api/bills', {...data});
}

export {
    getFreeCard,
    addNewBill
}