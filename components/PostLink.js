import Link from "next/link";

//href는 실제 url이고 as는 router masking 해준 url입니다. 에쁘죠?
//실제로 접속하면 masking 된 url로 접속되지만 새로고침하면 찾을 수 없는 페이지라고 뜹니다. (server.js에서 해결하자)

export default (props) => (
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}> 
    <a>{props.title}</a>
  </Link>
);