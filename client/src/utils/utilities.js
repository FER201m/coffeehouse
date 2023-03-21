import _ from "lodash";
import moment from "moment";


function formatPrice(n) {
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

const hanlderRequest = (promise) => {
  return promise
    .then((data) => [undefined, data])
    .catch((error) => [error, undefined]);
};

const cloneData = (data) => {
  const clonedData = _.cloneDeep(data);
  if (clonedData) {
    return clonedData;
  }
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function setTime(dateString) {
  const formattedTime = moment(dateString).format("HH:mm");
  return <div>{formattedTime}</div>;
}

export {
    formatPrice,
    hanlderRequest,
    cloneData,
    validateEmail,
    setTime
}
