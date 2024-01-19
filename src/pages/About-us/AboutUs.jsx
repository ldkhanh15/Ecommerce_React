import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Welcome from './components/Welcome/Welcome'
import Provide from './components/Provide/Provide'
import Performance from './components/Performance/Performance'
import Statistical from './components/Statistical/Statistical'
import OurTeam from './components/OurTeam/OurTeam'
import useScrollToTop from '@/hooks/useScrollToTop'

const cx = classNames.bind(styles)
const AboutUs = () => {
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Welcome/>
      <Provide/>
      <Performance/>
      <Statistical/>
      <OurTeam/>
    </div>
  )
}

export default AboutUs