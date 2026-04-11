import Search from '../components/Search';

const Home = () => {
    return <div className="main">
        <h1 className="logo">findOrigins</h1>

        <h2>이 제품, 어디서 본 것 같지 않나요?</h2>
        <p>
            Find Origins 상품 링크나 키워드를 기반으로 유사품의 원제품을 찾아 <br/>작가를 직접 확인할 수 있게 만든 서비스입니다.
        </p>
        <Search pageClass={"homeSearch"}/>
    </div>;
};

export default Home;