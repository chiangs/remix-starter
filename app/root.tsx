// Remix
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
// Styles
import normalizeStylesUrl from '~styles/__normalize__.css';
import globablStylesUrl from '~styles/global.css';
import rootStylesUrl from '~styles/index.css';

export const meta: MetaFunction = () => {
    return { title: 'New Remix App' };
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: normalizeStylesUrl,
        },
        {
            rel: 'stylesheet',
            href: globablStylesUrl,
        },
        {
            rel: 'stylesheet',
            href: rootStylesUrl,
        },
    ];
};

const Document = ({
    children,
    title = `Remix: So great, it's funny!`,
}: {
    children: React.ReactNode;
    title?: string;
}): JSX.Element => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <title>{title}</title>
            <Links />
        </head>
        <body>
            {children}
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
    </html>
);

const App = () => (
    <Document>
        <Outlet />
    </Document>
);

/**
 * Remember to update the title
 */
export const ErrorBoundary = ({ error }: { error: Error }) => (
    <Document title="Uh-oh!">
        <div className="error-container">
            <h1>App Error</h1>
            <pre>{error.message}</pre>
        </div>
    </Document>
);

export default App;
