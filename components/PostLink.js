import Link from "next/link";

//href는 실제 url이고 as는 router masking 해준 url입니다. 에쁘죠?
//실제로 접속하면 masking 된 url로 접속되지만 새로고침하면 찾을 수 없는 페이지라고 뜹니다. (server.js에서 해결하자)

export default (props) => (
  <Link href={`/movie?id=${props.id}`} as={`/movie/${props.id}`}> 
    <a>
      {props.title}
      <style jsx global>{ //global은 전역이긴한데 모든 페이지에서의 전역이 아니고, 그 페이지의 전역임. 지금 body태그가 없음에도 불구하고 global로 PostLink가 속한 페이지의 body에 속성을 준것임.
          `
              body{
                background-color: white;
              }
          `
      }</style>
    </a>

    
  </Link>
 
  
);