import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/public/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    console.log(categories);
    return (
        <div className="space-y-6">
            <h2>All categories</h2>
            {
                categories.map(category => <Link key={category.id} to={`/categories/${category.id}`} className="block ml-4 text-xl font-semibold">{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNavbar;