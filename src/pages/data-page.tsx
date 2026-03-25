import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DataPage = ({ type }: { type: string }) =>
{
    const { source } = useParams();
    const [data, setData] = useState<any[]>([]);

    useEffect(() =>
    {
        const urls: any =
        {
            users:
            {
                jsonplaceholder: "https://jsonplaceholder.typicode.com/users",
                dummyjson: "https://dummyjson.com/users",
            },
            posts:
            {
                jsonplaceholder: "https://jsonplaceholder.typicode.com/posts",
                dummyjson: "https://dummyjson.com/posts",
            },
            comments:
            {
                jsonplaceholder: "https://jsonplaceholder.typicode.com/comments",
                dummyjson: "https://dummyjson.com/comments",
            },
        };

        const url = urls[type][source!];

        fetch(url)
            .then(res => res.json())
            .then(res =>
                setData(res.users || res.posts || res.comments || res)
            );
    }, [type, source]);

    return (
        <div>

            {data.map(item => (
                <pre key={item.id}>
                    {JSON.stringify(item, null, 2)}
                </pre>))}
        </div>
    );
};

export default DataPage;