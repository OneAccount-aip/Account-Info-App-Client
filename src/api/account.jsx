import axios from "axios";

export async function accountListApi(getAccountBalance) {
    const cacheName = 'account-list-cache';
    const httpRequest = {
        method: 'GET',
        url: `${process.env.REACT_APP_PROXY}/user/me`,
        headers: {
            Authorization: localStorage.getItem('Authorization'),
        },
    };

    let data = '';
    let cacheResponse = await caches.match(httpRequest);
    if (cacheResponse) {
        const cachedData = await cacheResponse.json();
        try {
            const result = axios(httpRequest);
            const accounts = result.data.res_list;
            const newAccounts = accounts.map(async (each) => {
                return {...each, balance: await getAccountBalance(each.fintech_use_num)};
            });
            data = Promise.all(newAccounts);
            const cache = caches.open(cacheName);
            await cache.put(httpRequest, new Response(JSON.stringify(data)));
        } catch (error) {
            return cachedData;
        }
    } else {
        try {
            const result = await axios(httpRequest);
            const accounts = result.data.res_list;
            const newAccounts = accounts.map(async (each) => {
                return {...each, balance: await getAccountBalance(each.fintech_use_num)};
            });
            data = await Promise.all(newAccounts);
            const cache = await caches.open(cacheName);
            await cache.put(httpRequest, new Response(JSON.stringify(data)));
        } catch (error) {
            throw new Error('Failed to fetch account list');
        }
    }
    return data;
}


export async function searchAccountNumApi(value, setSearchAccount) {
    const cacheName = 'search-account-cache';
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/bankAccount?num=${value}`,
    }
    const cache = await caches.open(cacheName);
    const cacheResponse = await cache.match(httpRequest);
    if (cacheResponse) {
        const cacheData = await cacheResponse.json();
        setSearchAccount(cacheData);
    }
    const result = await axios(httpRequest);
    const serverResponse = JSON.stringify(result.data);
    await cache.put(httpRequest, new Response(serverResponse));
    if (!cacheResponse || serverResponse !== cacheResponse) {
        setSearchAccount(result);
    }
}

export async function getAccountNumByFinNumApi(finNum, setFromAccountNum) {
    const cacheName = `account-num-cache-${finNum}`;
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/finNum?num=${finNum}`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    const cache = await caches.open(cacheName);
    const cacheResponse = await cache.match(httpRequest);
    if (cacheResponse) {
        const cacheData = await cacheResponse.json();
        setFromAccountNum(cacheData.accountNum);
    }
    const result = await axios(httpRequest);
    const serverResponse = JSON.stringify(result.data);
    await cache.put(httpRequest, new Response(serverResponse));
    if (!cacheResponse || serverResponse !== cacheResponse) {
        setFromAccountNum(result.data.accountNum);
    }
}

export async function getAccountByFinNumApi(toFinNum, setToAccount) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/finNum?num=${toFinNum}`,
    }
    const cacheName = 'get-account-cache';
    const cacheResponse = await caches.match(httpRequest);
    if (cacheResponse) {
        const cacheData = await cacheResponse.json();
        setToAccount(cacheData);
        return cacheData;
    } else {
        const result = await axios(httpRequest);
        const toAccount = result.data.accountNum;
        const cache = await caches.open(cacheName);
        await cache.put(httpRequest, new Response(JSON.stringify(toAccount)));
        setToAccount(toAccount);
        return toAccount;
    }
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

export async function transactionListApi(state, setTransactionList, getAccountNumber) {
    const cacheName = `transaction-list-cache-${state.fintech_use_num}`
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/transaction/account/transaction_list?fintech_use_num=${state.fintech_use_num}&from_date=20230101&to_date=20230301`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    }
    const cache = await caches.open(cacheName);
    const cacheResponse = await cache.match(httpRequest);
    if (cacheResponse) {
        const cacheData = await cacheResponse.json();
        setTransactionList(cacheData.res_list);
        getAccountNumber(cacheData.fintech_use_num)
    }
    const result = await axios(httpRequest);
    const serverResponse = JSON.stringify(result.data);
    await cache.put(httpRequest, new Response(serverResponse));
    if (!cacheResponse || serverResponse !== cacheResponse) {
        setTransactionList(result.data.res_list);
        getAccountNumber(result.data.fintech_use_num)
    }
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
    return accounts.map(async (each) => {
        return {...each, balance: await getAccountBalance(each.fintech_use_num)}
    });
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
