import {useSearchParams} from "react-router-dom";

interface PaginationProps
{
    total: number;
}

const PaginationComponent = ({ total }: PaginationProps) => {
    const [query, setQuery] = useSearchParams({pg: '1'});
    const pg = query.get('pg') || '1';
    let currentPage = +pg;
    const limit = 10;
    const totalPages = Math.ceil(total / limit);

    return (
        <div>
            <button
                disabled={currentPage <= 1}
                onClick={() => {

                    if (pg) {
                        setQuery({pg: (--currentPage).toString()});
                    }

                }}
            >prev
            </button>


            <button
                disabled={total === 0 || currentPage >= totalPages}
                onClick={() => {
                if (pg) {
                    setQuery({pg: (++currentPage).toString()});
                }

            }}>next
            </button>

        </div>
    );
};

export default PaginationComponent;