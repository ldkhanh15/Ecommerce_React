import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import classNames from 'classnames/bind';
import styles from './styles.module.scss'

const cx = classNames.bind(styles)
const Search = ({ onSearch, setData }) => {
    const [searchValue, setSearchValue] = useState('')
    const debounceValue = useDebounce(searchValue, 1000);

    const handleChangeSearch = async (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    useEffect(() => {
        const getData = async () => {

            let res = await onSearch(debounceValue)
            setData(res.data)
        }
        getData();
    }, [debounceValue])
    return (
        <div className={cx('search')}>
            <input value={searchValue} onChange={(e) => handleChangeSearch(e)} type="text" placeholder='Search a banner' />
            <CiSearch className={cx('icon')} />
        </div>
    )
}

export default Search