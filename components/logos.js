import React from 'react'
import { useTranslation } from 'next-i18next';

export default function Logos () {
  const { t } = useTranslation('common');
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {t('section-intro').split('\n').map((text, i) => (
          <p key={i} className="text-center text-lg font-semibold text-gray-500 tracking-wide">
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

