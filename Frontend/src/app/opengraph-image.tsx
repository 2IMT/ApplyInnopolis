import { ImageResponse } from 'next/server'

import './globals.css'

export const alt = 'Apply Innopolis'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <>
                Apply Innopolis
            </>
        ),
        {}
    )
}