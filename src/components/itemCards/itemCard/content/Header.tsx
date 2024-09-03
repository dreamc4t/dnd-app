interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return <h2 className='m-0'>{title}</h2>
}

export { Header }
