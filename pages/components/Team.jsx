import React from 'react'
import { motion } from "framer-motion"
const Team = () => {
    return (
        <div name="team" className="text-white md:h-screen">
            <h2 className="text-center text-4xl font-bold underline m-[100px] pt-100 md:p-0">Our Team</h2>
            <div className="hidden md:flex md:flex-row flex-col items-center justify-around mb-[50px] my-2">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/70" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Alice</p>
                    <p>Founder, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/71" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Bob</p>
                    <p>Lead Design, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/72" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Clark</p>
                    <p>Blockchain Dev, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: 200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/73" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Diana</p>
                    <p>Lead Animator, Pots</p>
                </motion.div>

            </div>
            <div className="hidden md:flex md:flex-row flex-col items-center justify-around mb-[50px] my-2">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/80" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Eva</p>
                    <p>Marketing Manager, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/75" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Faff</p>
                    <p>Discord Manager, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/76" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Gween</p>
                    <p>Front-End Dev, Pots</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 1, y: -200 }}
                    whileInView={{ y: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/78" alt="Founder"
                        className="w-[200px] rounded-full"
                    />
                    <p>Harry</p>
                    <p>Project Lead, Pots</p>
                </motion.div>

            </div>


            {/* Mobile View  */}
            <div className="md:hidden flex md:flex-row flex-col items-center justify-around space-y-5">
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/70" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Alice</p>
                    <p>Founder, Pots</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/71" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Bob</p>
                    <p>Lead Design, Pots</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/72" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Clark</p>
                    <p>Blockchain Dev, Pots</p>
                </motion.div>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    initial={{ scale: 0 }}
                    className="text-center">
                    <img src="https://gateway.ipfscdn.io/ipfs/QmbkG4FUyjVsc3PipRrfcocDnyovufLVxgK7pNuL7SWUYk/73" alt="Founder"
                        className="w-[150px] rounded-full"
                    />
                    <p>Diana</p>
                    <p>Lead Animator, Pots</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Team