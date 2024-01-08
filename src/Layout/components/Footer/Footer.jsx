import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Letter from './Letter/Letter'
import Feature from './Feature/Feature'
import Section from './Section/Section'
import Contact from './Contact/Contact'

const cx=classNames.bind(styles)
const Footer = () => {
  return (
    <div className={cx('container')}>
      <Letter/>
      <Feature/>
      <Section/>
      <Contact/>
    </div>
  )
}

export default Footer