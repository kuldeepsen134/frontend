import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = (props) => {
// const { total_pages, onClick} = props
console.log(props);
  return (
    <>
      <ReactPaginate
        breakLabel=""
        nextLabel="Next"
        previousLabel="Preview"
        // onPageChange={props.onClick}
        // pageCount={props.total_pages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link previous-arrow"
        nextClassName="page-item"
        nextLinkClassName="page-link next-arrow"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center"
        activeClassName="active"
      />
    </>
  )
}
export default Pagination