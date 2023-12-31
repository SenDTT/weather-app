import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Generated by create next app',
}

export default function WeatherLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <h1>Hi user,</h1>
            {children}
        </>
    )
}