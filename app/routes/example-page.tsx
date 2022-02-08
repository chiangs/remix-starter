// Remix
import type { LinksFunction, MetaFunction } from 'remix';
import { Link, Outlet } from 'remix';
// Styles
import stylesUrl from '~styles/example-page.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl,
        },
    ];
};

export const meta: MetaFunction = () => {
    return {
        title: 'Example page',
        description: 'Route with error boundaries example.',
    };
};

const goBack = <Link to="/">Container nav GoBack</Link>;

const ExamplePage = () => {
    return (
        <article className="container--page">
            <h1>Example Page</h1>
            <p>This is an example of another route.</p>
            {goBack}
            <Outlet />
        </article>
    );
};

export default ExamplePage;
