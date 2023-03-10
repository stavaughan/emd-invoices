import { useMemo } from 'react';
import { FetchedImage } from 'components/Gallery';
import clsx from 'clsx'

import '../styles/invoice.css';

const ProductImageCol = ({ color, hasImage, imagePath = '', idx }) => {

    const rowNumber = useMemo(() => idx < 10 ? `0${idx + 1}` : `${idx + 1}`, [idx]);

    return (
        <td
			className={clsx('invoice-number text-center', hasImage ? 'p-1' : 'py-4')}
			style={{ color }}
		>
            {hasImage && !!imagePath ? (
                <FetchedImage
                    key={imagePath}
                    pid={imagePath}
                    width='118'
                />
            ) : rowNumber}
        </td>
    )
}

export default ProductImageCol
