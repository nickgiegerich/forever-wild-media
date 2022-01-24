import Nav from './Nav';

function Layout({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen w-screen'>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;
