import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/transition";

function buyData() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div></div>
        </motion.div>
    );
}

export default buyData;