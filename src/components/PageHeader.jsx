import './PageHeader.css';
import {PageBanner} from './PageBanner';
import PageNavigation from './PageNavigation';

export const PageHeader = () =>{
    return (
        <header className='header'>
            <PageBanner/>
            <PageNavigation/>
        </header>
    )
}