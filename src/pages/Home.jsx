import Search from '../components/Search';

const Home = () => {
    return <div className="main">
        <h1 className="logo">findOrigins</h1>

        <h2>이 제품, 어디서 본 것 같지 않나요?</h2>
        <p>
            Find Origins 상품 링크나 키워드를 기반으로 <br/>원제품 후보를 탐색하고 비교할 수 있도록 돕는 서비스입니다.
        </p>
        <Search pageClass={"homeSearch"}/>
    </div>;
};

export default Home;