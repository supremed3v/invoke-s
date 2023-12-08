'use client'

import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

import React from 'react'
import { Button } from '../../Button'

export const HeaderNav: FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      {user && <Link href="/account">Account</Link>}

      {!user && (
        <Button
          el="element"
          appearance="primary"
          href="/login"
          label="Login"
          onClick={() => (window.location.href = '/login')}
        />
      )}
    </nav>
  )
}
