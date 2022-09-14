import React, {forwardRef, useImperativeHandle, useState} from "react";
import styles from './styles.module.css';
import {CSSTransition} from "react-transition-group";

const Dialog = forwardRef(({title, body}, ref) => {
    const [isVisible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    useImperativeHandle(ref, ()=> {
        return {
            show
        }
    })

    return (
        <CSSTransition unmountOnExit timeout={200} in={isVisible} classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            enterDone: styles.enterDone,
            exit: styles.exit,
            exitActive: styles.exitActive,
            exitDone: styles.exitDone
        }}>
            <div onClick={()=> {hide()}} className={styles.wrapper}>
                <div onClick={(e)=>{e.stopPropagation()}} className={`${styles.enterDone} ${styles.content}`}>
                    <div className={styles.title}>
                        {title}
                        <div onClick={()=>{hide()}} className={styles.closeBtn}>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </div>
                    </div>
                    <div className={styles.body}>{body}</div>
                </div>
            </div>
        </CSSTransition>
    );
})

export default Dialog
