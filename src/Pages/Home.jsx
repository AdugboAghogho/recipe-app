import React from 'react'
import Veggie from '../Components/Veggie'
import Popular from '../Components/Popular'
import Snack from '../Components/Snack'
import { motion } from 'framer-motion'
import Bread from '../Components/Wine'

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />   
      <Snack/>
      <Bread />
    </motion.div>
  )
}

export default Home
