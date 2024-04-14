// import Link from 'next/link'
// import { FiChevronRight } from "react-icons/fi";

// const BreadCrumbs = props => {
//    // props
//    const { data, title } = props

//    const renderBreadCrumbs = () => {
//       return data?.map((item, index) => {
//          const Wrapper = item.link ? Link : 'div'
//          const isLastItem = data.length - 1 === index
//          return (
//             <li key={index} className={`d-flex align-items-center `}>
//                <FiChevronRight size='15' className='mx-2' />
//                <Wrapper className='text-sm leading-none' {...(item.link ? { to: item.link } : {})}>{item.title}</Wrapper>
//             </li>
//          )
//       })
//    }

//    return (
//       <div className='mb-3'>
//          <div className='breadcrumb d-flex align-items-center'>
//             {title ? <div className="breadcrumb-title fs-5 me-4">{title}</div> : ''}
//             <ul className='breadcrumbs list-unstyled d-flex align-items-center m-0'>
//                <li className='breadcrumbs-item'>
//                   <Link href='/' className='breadcrumbs-link'>Home</Link>
//                </li>
//                {renderBreadCrumbs()}
//             </ul>
//          </div>
//       </div>
//    )
// }
// export default BreadCrumbs

const Page = () => {
   return (<div></div>);
}
 
export default Page;