import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const useDataSort = ({ sortItemsAsc, sortItemsDesc, initialState }) => {

    const [sortBy, setSortBy] = useState(initialState || 'asc');  

    const dispatch = useDispatch()

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            if(!sortItemsAsc || !sortItemsDesc) {
                return
            }
            const sortItems = sortBy === 'asc' ? sortItemsAsc : sortItemsDesc
            dispatch(sortItems())
        }
        return () => {
            mounted = false;
        }
    }, [dispatch, sortBy, sortItemsAsc, sortItemsDesc])

    return { sortBy, setSortBy }
}

export default useDataSort