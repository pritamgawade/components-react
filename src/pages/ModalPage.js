import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal
            (true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>open modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non quam ligula. Duis aliquet neque in finibus hendrerit. Vestibulum accumsan, eros at maximus laoreet, purus augue luctus ligula, in lacinia massa velit vel nisl. Vestibulum a pulvinar lacus, at volutpat mauris. Sed dui quam, consequat sed mattis at, iaculis eget augue. Nullam molestie eget ante a malesuada. Mauris feugiat dolor at nunc imperdiet iaculis.</p>
        </div>

    )
}

export default ModalPage;