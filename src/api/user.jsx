import axios from "axios";

export async function userInfoApi(setUser) {
    const cacheName = "user-info-cache";
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/user`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        },
    };
    const cache = await caches.open(cacheName);
    const cacheResponse = await cache.match(httpRequest);
    if (cacheResponse) {
        const cacheData = await cacheResponse.json();
        setUser(cacheData.data);
    }
    const result = await axios(httpRequest);
    const serverResponse = JSON.stringify(result);
    await cache.put(httpRequest, new Response(serverResponse));

    if (!cacheResponse || serverResponse !== cacheResponse) {
        setUser(result.data);
    }
}

export function signupApi(username, password, email, navigate) {
    const request = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/signup`,
        data: {
            username: username,
            password: password,
            email: email
        }
    }
    console.log(request)
    axios(request).then((res) => {
        window.alert(res.data.id + " id로 계정 생성")
        navigate("/signin")
    }).catch((err) => {
        window.alert(err)
    })
}

export function signinApi(username, password, navigate) {
    const request = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/login`,
        data: {
            username: username,
            password: password,
        }
    }
    console.log(request)
    axios(request).then((res) => {
        window.alert("로그인 완료")
        localStorage.setItem("Authorization", res.headers.authorization)
        navigate("/")
    }).catch((err) => {
        window.alert(err.message)
    })
}

export function certificateCheckApi(navigate, location) {
    const httpRequest = {
        method: "GET",
        url: `${process.env.REACT_APP_PROXY}/check`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`
        }
    }
    axios(httpRequest)
        .then((res) => {
            if (res.data === true)
                navigate("/accountInfo")
            else
                navigate(`/authPage${location.search}`)
        })
}

export function store3LeggedTokenApi(authCode, setCntrToken, setRefreshToken, setUserSeqNo) {
    const httpRequest = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/auth/callback?code=${authCode}`,
    }
    axios(httpRequest)
        .then((res) => {
            setCntrToken(res.data.access_token)
            setRefreshToken(res.data.refresh_token)
            setUserSeqNo((res.data.user_seq_no))
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function store2LeggedTokenApi(setDepositToken, setClientUseCode) {
    const httpRequest = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/auth/`,
    }
    axios(httpRequest)
        .then((res) => {
            setDepositToken(prev => res.data?.access_token || prev)
            setClientUseCode(res.data.client_use_code)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function storeUserAuthApi(cntrToken, refreshToken, depositToken, userSeqNo, clientUseCode, navigate) {
    const httpRequest = {
        method: "POST",
        url: `${process.env.REACT_APP_PROXY}/auth/token`,
        headers: {
            Authorization: localStorage.getItem("Authorization")
        },
        data: {
            cntrToken: cntrToken,
            refreshToken: refreshToken,
            depositToken: depositToken,
            userSeqNo: userSeqNo,
            clientUseCode: clientUseCode
        }
    }
    console.log(httpRequest)
    axios(httpRequest)
        .then((res) => {
            console.log(res.data.code)
            navigate("/info")
        }).catch((err) => {
        console.log(err)
    })
}