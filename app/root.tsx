// Remix
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
// Styles
import normalizeStylesUrl from '~styles/__normalize__.css';
import globablStylesUrl from '~styles/global.css';
import rootStylesUrl from '~styles/index.css';

export const meta: MetaFunction = () => {
    const description = `Remix startup example`;
    const keywords = `Remix, startup, example`;
    const twitter = {
        'twitter:image': 'https://www.webstep.no/wp-content/uploads/2019/08/WEBSTEP_logo.png',
        'twitter:card': 'summary_large_image',
        'twitter:creator': '@chiangse',
        'twitter:site': '@chiangse',
        'twitter:title': 'Remix startup',
        'twitter:description': description,
    };
    return { title: 'New Remix App', description, keywords, ...twitter };
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
    title = `Remix!`,
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
        <header id="header" className="header">
            Header / Main navigation
        </header>
        <main id="main" className="main">
            <Outlet />
        </main>
        <footer id="footer" className="footer">
            Footer
        </footer>
    </Document>
);

export const CatchBoundary = () => {
    const caught = useCatch();
    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <div className="error-container">
                <h1>
                    {caught.status} {caught.statusText}
                </h1>
            </div>
        </Document>
    );
};

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
