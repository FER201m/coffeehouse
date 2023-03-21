const useFormatMoney = (number) => {
    if (number == null) return "-"
    number = number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return number
}

export default useFormatMoney