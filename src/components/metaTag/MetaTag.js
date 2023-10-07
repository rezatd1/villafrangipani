import React from 'react'
import { Helmet } from 'react-helmet'

export default function MetaTag({ PageTitle, metaDescription }) {
    return (
        <Helmet>
            <title>{PageTitle}</title>
            <meta name="description" content={metaDescription} />
        </Helmet>
    )
}
