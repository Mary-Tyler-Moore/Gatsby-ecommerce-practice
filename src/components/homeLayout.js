import React from 'react'

import * as styles from '../styles/Layout.module.scss'

const HomeLayout = ({ children }) => (
    <div className={styles.Gridcontainer} > {children}</div>
)

export default HomeLayout