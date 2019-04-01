const express = require("express");
const next = require("next");

const Isdev = process.env.NODE_ENV !== "production"; //서버가 development인지 production인지 판단합니다. (production서버는 많은 정보를 담아두지 않습니다.)
//서버가 production상태가 아니면 Isdev는 1입니다.

const app = next({ //next앱을 생성합니다.
    dev: Isdev
});

const handle = app.getRequestHandler(); //우리의 모든 request를 해결해 줄 것입니다.

//구동

app
.prepare().then( () => {

    const server = express(); //서버는 express서버를 사용하겠습니다.

    server.get("/movie/:id", (req, res) => { //id param을 감지합니다.
        const actualPage = "/movie"; //실제로 보여줄 페이지입니다.
        const queryParams = { id: req.params.id }; //감지한 id param을 다시 movie 대입합니다. 여기서 movie props.router.query.movie 의 그 movie입니다.
        app.render(req, res, actualPage, queryParams);
      });


    server.get("*", (req,res) => {  //*는 서버로 부터 보든 정보를 받겠습니다. 2번쨰 인자인 함수는 콜백함수입니다.
        return handle(req,res); //handle에게 넘겨줍니다.
    } );

    server.listen(3000, err => { 
        if(err) throw err; //에러가있다면 에러 발생
        
        console.log("페이지 구동준비 완료");
    
    });

} ).catch(ex => { //에러발생되면
    console.log(ex.stack); //출력하고
    process.exit(1); //프로세스종료
});

//구동준비 되었으니 scripts에서 명령어 바꿔주러가자.