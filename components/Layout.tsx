import Nav from './Nav';

function Layout({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Nav />
        </div>
    )
}

export default Layout;
