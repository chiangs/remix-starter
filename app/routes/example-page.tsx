// Remix
import { Link, Outlet } from 'remix';

const goBack = <Link to="/">Container nav GoBack</Link>;

const ExamplePage = () => {
    return (
        <article className="container">
            <h1>Example Page</h1>
            <p>This is an example of another route.</p>
            {goBack}
            <Outlet />
        </article>
    );
};

export default ExamplePage;
