import React from 'react'
import { useTranslation, Trans } from 'next-i18next';

export default function Logos () {
  const { t } = useTranslation('common');
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-gray-500 tracking-wide">
          <Trans
            i18nKey='section-intro'
            components={{ ul: <ul className='pl-5 mt-5'/>, li: <li style={{listStyle: 'disc'}}/>, br: <br />, h2: <h2 className="text-xl font-extrabold tracking-tight text-gray-900"/> }}
          />
        </p>
      </div>
    </div>
  )
}

