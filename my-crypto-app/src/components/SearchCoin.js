
import { useState } from 'react';


const SearchCoin = ( { getQuery } )=>  {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }


    return (
        <section className='search'>
            <form>
                <input
                type='text'
                className='form-control'
                placeholder='Search'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default SearchCoin
