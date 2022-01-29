import Head from 'next/head'

function SEO({ title }) {
    const description = process.env.siteDescription
    const keywords = process.env.siteKeywords
    const siteURL = process.env.siteUrl
    const imagePreview = `${siteURL}${process.env.siteImagePreviewUrl}`

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph */}
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:image" content={imagePreview} key="ogimage" />
            <meta property="og:site_name" content={siteURL} key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <title>{title}</title>

            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <link
                href="/icons/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/icons/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#EF4444" />
        </Head>
    )
}

export default SEO