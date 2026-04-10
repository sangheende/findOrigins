import {useState} from 'react';
import FeatherIcon from 'feather-icons-react';
import './search.scss';





const Search = ({pageClass}) => {
    const [icon,setIcon] = useState('tag');

    const onChangeIcon = (e) => {
        const val = e.target.value;
        const isUrl = /^https?:\/\//.test(val) || val.includes('.');
        setIcon(isUrl ? 'link' : 'tag');
    }


    return <div className={`search ${pageClass}`} onChange={onChangeIcon}>
        <div className='search__type'>
            <FeatherIcon icon={icon}/>

        </div>
        <input className='search__input' type="text" placeholder="상품링크 또는 키워드를 입력하세요"/>
        <button className='search__button'><FeatherIcon icon='search'/></button>
    </div>;
};

export default Search;