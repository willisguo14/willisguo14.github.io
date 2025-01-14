interface HeaderProps {
    header: string;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
    return (
        <div className='px-2 my-10'>
            <h1 className='text-2xl font-medium'>{header}</h1>
        </div>
    );
}

export default Header;