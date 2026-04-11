import {useState} from 'react';
import FeatherIcon from 'feather-icons-react';

import Badge from './Badge'
import './search.scss';





const Search = ({pageClass}) => {
    const [icon,setIcon] = useState('search');

    const onChangeIcon = (e) => {
        const val = e.target.value;
        const isEmpty = val === '';
        if (isEmpty) {
            setIcon('search');
            return;
        }
        const isUrl = /^https?:\/\//.test(val) || val.includes('.');
        setIcon(isUrl ? 'link' : 'tag');
    }

    const onKeyDown = ()=>{
        
    }
    return <div className={`search ${pageClass}`} onChange={onChangeIcon}>
        <div className='search__type'>
            <FeatherIcon icon={icon}/>

        </div>
        <input className='search__input' type="text" placeholder="상품링크 또는 키워드를 입력하세요"/>
        <button className={icon === 'search'? 'search__btn' : 'search__btn active'}><FeatherIcon icon='search'/></button>
        <div className={icon === 'tag'? 'search__badge active': 'search__badge'}> 
            <Badge type={'tag'} text={'키워드 검색'}/>
        </div>
    </div>;
};

export default Search;