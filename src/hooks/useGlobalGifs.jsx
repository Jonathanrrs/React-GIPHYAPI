import {useContext} from 'react';
import GifsContext from '../context/GifsContext';

export default function UseGlobalGifs() {
    // const {gifs} = useContext(GifsContext);
    // return gifs;
    return useContext(GifsContext).gifs
}