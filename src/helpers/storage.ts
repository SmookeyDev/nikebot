export const newAccount = (accountName: any) =>{
    let accounts = localStorage.getItem("accounts")
    if(accounts == null){
        localStorage.setItem("accounts", JSON.stringify({"accounts": []}))
        accounts = localStorage.getItem("accounts")
    }
    if(accounts != null){
        const accounts_json = JSON.parse(accounts)
        const newAccount = accounts_json.accounts[accounts_json.accounts.length] = {"accountName": accountName, "email": "", "password": "", "telephone": "", "proxies": []}
        localStorage.setItem("accounts", JSON.stringify(accounts_json))    
    }
}

export const getAccounts = () =>{
    let accounts = localStorage.getItem("accounts")
    if(accounts != null){
        const accounts_json = JSON.parse(accounts)
        return accounts_json.accounts
    }
    return []
}