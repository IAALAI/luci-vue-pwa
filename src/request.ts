import useOption from "./store/option";

const option = useOption();

function request(uri: string, data: any) {
    return fetch(`${option.server}${uri}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: `sysauth=${ option.auth }; sessiontoken=${ sessionStorage.token }`
        },
        body: JSON.stringify(data)
    })
}
