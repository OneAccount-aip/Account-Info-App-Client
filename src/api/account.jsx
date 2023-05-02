import axios from "axios";

export async function accountListApi(getAccountBalance) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/user/me`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    const result = await axios(httpRequest)
    const accounts = result.data.res_list
    const newAccounts = accounts.map(async (each) => {
        return {...each, balance: await getAccountBalance(each.fintech_use_num)}
    })
    return await Promise.all(newAccounts
    );
}

export function searchAccountNumApi(value, setSearchAccount) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/bankAccount?num=${value}`,
    }
    axios(httpRequest)
        .then((res) => {
            setSearchAccount(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function getAccountNumByFinNumApi(finNum, setFromAccountNum) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/finNum?num=${finNum}`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    axios(httpRequest)
        .then((res) => {
            setFromAccountNum(res.data.accountNum)
        })
        .catch((err) => {
            console.log("err", err)
        })
}

export async function getAccountByFinNumApi(toFinNum, setToAccount) {
    const getAccountRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/finNum?num=${toFinNum}`,
    }
    const result = await axios(getAccountRequest)
    const toAccount = result.data.accountNum
    setToAccount(toAccount)
    return toAccount;
}

export function transferApi(fromFinNum, toAccount, fromBank, amount, navigate) {
    const httpRequest = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/transaction/transfer`,
        data: {
            fromFinNum: fromFinNum,
            toAccount: toAccount,
            amount: amount,
            content: "앱송금"
        }
    }
    axios(httpRequest)
        .then((res) => {
            window.alert(`${fromBank} 계좌로 ${amount}원을 송금했습니다`)
            navigate("/accountInfo")
        })
        .catch((err) => {
            console.log(err)
        })
}

export function transactionListApi(state, setTransactionList, getAccountNumber) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/transaction/account/transaction_list?fintech_use_num=${state.fintech_use_num}&from_date=20230101&to_date=20230301`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    axios(httpRequest)
        .then((res) => {
            setTransactionList(res.data.res_list)
            getAccountNumber(res.data.fintech_use_num)
        })
}

export async function userAccountApi(getAccountBalance) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/user/me`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    const result = await axios(httpRequest)
    const accounts = result.data.res_list
    const newAccounts = accounts.map(async (each) => {
        return {...each, balance: await getAccountBalance(each.fintech_use_num)}
    })
    return newAccounts;
}

export async function accountBalanceApi(fintechUseNum) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/transaction/account?fintech_use_num=${fintechUseNum}`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    const result = await axios(httpRequest)
    return result.data.balance_amt
}