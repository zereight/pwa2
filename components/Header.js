import Link from "next/link";

export default () => (
    <header>
        <nav>
            <div>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        <style jsx>{ //next js 의 스타일을 non global방식으로 그 js파일내에서만 적용이된다. classname이나 id를 따로 설정해줄 필요가 없다.
        //global 방식으로 하고 싶으면 global속성을 추가하면된다. <style jsx global>
        //페이지를 구동한 후 요소검사를 해보면 jsx속성이 Header에 해당하는 태그에 들어가 있는 것을 알 수 있다.
        //jsx 속성은 항상 기본 태그 (사용자 정의태그말고) 를 부모로 가지는 위치에 있어야 한다.
            `
                ul{
                    display: flex;
                }
                ul li {
                    margin-right: 20px;
                }
                header {
                    background-color: peru;
                }
            `
        }</style>

    </header>
);