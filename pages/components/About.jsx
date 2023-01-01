import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div name="about" className="h-screen text-white flex items-center justify-center">
            <motion.div
                transition={{ type: "tween", duration: 1 }}
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                whileHover={{ scale: 1.2, rotate: 30 }}
            >
                <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/35" alt="pot25"
                    className='hidden md:grid w-[100px] rounded-full mt-[200px]' />
            </motion.div>
            <motion.div
                transition={{ type: "tween", duration: 1 }}
                initial={{ scale: 0.1 }}
                whileInView={{ scale: 1 }}
                className="max-w-[600px] p-5">
                <h1 className="text-6xl md:text-8xl font-extrabold text-center my-[20px]">About Pots NFT</h1>
                <p className='font-thin text-center my-[10px]'>
                    100 uniquely generated generated pots ready to contribute in prevention of climate change with the help of its awesome HODLers.
                </p>
            </motion.div>
            <motion.div
                transition={{ type: "tween", duration: 1 }}
                initial={{ x: 300 }}
                whileInView={{ x: 0 }}
                whileHover={{ scale: 1.2, rotate: 30 }}
            >
                <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/25" alt="pot25"
                    className='hidden md:grid w-[100px] rounded-full mb-[200px]' />
            </motion.div>

        </div >
    )
}

export default About