import Link from "next/link";
import usePagination from '../lib/usePagination.js'

export const dotts = '...'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)

    return (
        <div className="col-lg-12">

            {/* pagination */}
            <div className="saundyapagination saundyaup">
                <div className="saundyadivider saundyamb-90" />

                <div className="saundyapagination-buttons">
                {currentPage > 1 &&
                <Link key="pagination-item-prev" href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="saundyapagination-btn saundyapagination-btm--prev">&laquo;</Link>
                }
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                    <span
                        key={i}
                        className="saundyapagination-text"
                    >
                        {pageNumber}
                    </span>
                    ) : (
                    <Link
                        key={`pagination-item-${i}`}
                        href={renderPageLink(pageNumber)}
                        className={`${
                        pageNumber === currentPage ? 'saundyaactive' : ''
                        } saundyapagination-btn`}
                    >
                        {pageNumber}
                    </Link>
                    )
                )}
                {currentPage < pages.length &&
                <Link key="pagination-item-next" href={currentPage < pages.length ? renderPageLink( currentPage + 1 ) : renderPageLink( currentPage )} className="saundyapagination-btn saundyapagination-btn--next">&raquo;</Link>
                }
                </div>
            </div>
            {/* pagination end */}

        </div>
    );
  };
  export default Pagination;