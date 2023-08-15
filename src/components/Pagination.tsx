import React from 'react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) {
            return; // Prevent invalid page change
        }
        onPageChange(page);
    };

    return (
        <div className='justify-end hidden gap-3 mt-10 xl:flex'>
            <div>
                <button
                    type='button'
                    disabled={isFirstPage}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <p

                        className='cursor-pointer'
                    >
                        Previous
                    </p>
                </button>
            </div>
            <div className='space-x-2'>
                <span className='px-4 py-2 text-white border rounded-md cursor-pointer bg-greenMain'>
                    {currentPage}
                </span>
                <span className='px-4 py-2 border rounded-md cursor-pointer'>
                    {totalPages}
                </span>
            </div>
            <div>
                <button
                    type='button'
                    disabled={isLastPage}
                    onClick={() => handlePageChange(currentPage + 1)}
                >

                    <p

                        className='cursor-pointer'
                    >
                        Next
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
