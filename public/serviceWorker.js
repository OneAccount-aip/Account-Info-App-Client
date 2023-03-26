self.addEventListener('install', function(event) {
    console.log("installed")
}); // install 이 끝나면 인스톨되었다고 출력.

registerRoute((req) => req.event.request
        .headers
        .get('accept')
        .includes('text/html') //html 파일들을 캐싱
    ,new cacheFirst());//캐시 퍼스트 전략을 쓴다.