'use client'
import React from 'react'
import { Footer } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'

export const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter className={classes.wrap}>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={40}
                height={40}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p className={classes.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image
                src="/white-logo.png"
                alt="logo"
                className={classes.logo}
                width={40}
                height={40}
              />
            </Link>
            <p>{/* {footer.copyright} */}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}
