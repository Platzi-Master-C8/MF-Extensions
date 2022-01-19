export default function SystemException (message, type, code){
    console.log(message)
    return {message, type, code }
}