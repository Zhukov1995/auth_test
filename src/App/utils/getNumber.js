const getNumber = (string) => {
    return string.replace(/\D/g, '').replace(/^7/, '8')
 }
 
 export default getNumber;