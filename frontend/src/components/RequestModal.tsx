import { forwardRef, useImperativeHandle, useState } from "react";

const RequestModal = forwardRef((props, ref) => {

    const [__open, setOpen] = useState(true);

    useImperativeHandle(ref, ()=> ({
        open(){
            setOpen(true);
        },

        close(){
            setOpen(false);
        }
    }))


    return (
        <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/90">
            
        </div>
        </>
    )
})


export default RequestModal