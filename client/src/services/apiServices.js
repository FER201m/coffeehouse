import httpRequest from "~/utils/httpRequest"

const getFreeCard = async () => {
    return await httpRequest.get('/api/cards/free');
}

const addNewBill = async(data) => {
    return await httpRequest.post('/api/bills', {...data});
}

const getAllBills = async() => {
    return await httpRequest.get('/api/bills');
}

const getDetailBill = async (id) => {
    return await httpRequest.get(`/api/bills/${id}`);
}

export {
    getFreeCard,
    addNewBill,
    getAllBills,
    getDetailBill
}