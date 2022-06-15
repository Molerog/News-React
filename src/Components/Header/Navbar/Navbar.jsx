import {Link} from 'react-router-dom'

const Navbar = () => {
    const items =[{
        id:1,
        name: 'Home',
        url: '/'
    },
    {
        id:2,
        name: 'Form',
        url: '/form'
    },
    {
        id:3,
        name: 'News',
        url: '/list'
    }
]
    const item = items.map(element => {
        return (<div key={element.id} className='Link'>
            <Link to={element.url}>{element.name}</Link>
        </div>)
    })
  return (
    <div className = 'Items'>{item}</div>
  )
}

export default Navbar